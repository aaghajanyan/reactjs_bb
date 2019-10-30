import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "../reactComponents/Link";
import { links, NavBarConstants } from "../resources/navbarConstants";
import classNames from "classnames";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            iconClassName: ""
        };
        this.changeIcon = this.changeIcon.bind(this);
    }

    changeIcon() {
        this.setState({
            isOpened: !this.state.isOpened,
            iconClassName: this.state.isOpened ? " " : "nav-bar__toggle-close-btn"
        });
    }

    getLinkItems(itemsList) {
        const items = itemsList.map(item => (
            <Link
                key={item.label}
                href={item.link}
                type={item.isBtn}
                className={item.className}
                active={item.active}
                onClick={() => {}}
            >
                {item.label}
            </Link>
        ));
        return items;
    }
    render() {
        const classes = classNames(
            "nav-bar__toggle-btn",
            this.state.iconClassName,
          );
          const leftItems = this.getLinkItems(links.leftPart);
          const rightItems = this.getLinkItems(links.rightPart);
          const rightBtn = this.getLinkItems(links.rightPartBtn);
          
        return (
            <div className="nav-bar h">
                <Navbar className="header__nav-bar" expand="lg">
                    <Nav.Link className="nav-bar__logo" to="#home">
                        <img className="nav-bar__logo-img" src={NavBarConstants.logoSrc} />
                    </Nav.Link>
                    <Navbar.Toggle onClick={this.changeIcon} className={classes}/>
                    <Navbar.Collapse className="mr-auto nav-bar__nav-bar-collapse">
                        <Nav className="nav-bar__items nav-bar__left-items ">
                            <Nav>{leftItems}</Nav>
                        </Nav>
                        <hr className="nav-bar__line" />
                        <Nav className="nav-bar__items nav-bar__right-items">
                            {rightItems}
                            <hr className="nav-bar__line" />
                            <Nav className="nav-bar__items nav-bar__nav-bar-btn"> {rightBtn} </Nav>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export { NavBar };