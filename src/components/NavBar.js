import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "../reactComponents/Link";
import PropTypes from "prop-types";
import classNames from "classnames";

class NavBar extends React.Component {
    static propTypes = {
        navBarItems: PropTypes.any,
        navBarConstants: PropTypes.any
    }

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
            >
                {item.label}
            </Link>
        ));
        return items;
    }
    render() {
        const { navBarItems, navBarConstants } = this.props
        const classes = classNames(
            "nav-bar__toggle-btn",
            this.state.iconClassName,
        );
        const primaryNav = this.getLinkItems(navBarItems.primaryNav);
        const secondaryNav = this.getLinkItems(navBarItems.secondaryNav);
        const authNav = this.getLinkItems(navBarItems.authNav);
          
        return (
            <div className="nav-bar">
                <Navbar className="header__nav-bar" expand="lg">
                    <Nav.Link className="nav-bar__logo" to="#home">
                        <img className="nav-bar__logo-img" src={navBarConstants.logoSrc} />
                    </Nav.Link>
                    <Navbar.Toggle onClick={this.changeIcon} className={classes}/>
                    <Navbar.Collapse className="mr-auto nav-bar__nav-bar-collapse">
                        <Nav className="nav-bar__items nav-bar__left-items ">
                            <Nav>{primaryNav}</Nav>
                        </Nav>
                        <hr className="nav-bar__line" />
                        <Nav className="nav-bar__items nav-bar__right-items">
                            {secondaryNav}
                            <hr className="nav-bar__line" />
                            <Nav className="nav-bar__items nav-bar__nav-bar-btn"> {authNav} </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export { NavBar };