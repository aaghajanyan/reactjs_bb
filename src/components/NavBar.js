import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import classNames from "classnames";

class NavBar extends React.Component {
    static propTypes = {
        navBarItems: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };
        this.changeIcon = this.changeIcon.bind(this);
    }

    changeIcon() {
        const waitingTime =  this.state.isOpened ? 300 : 0;
        setTimeout(() => {
            this.setState({
                isOpened: !this.state.isOpened
            });
        }, waitingTime);
    }

    getLinkItems(itemsList) {
        const items = itemsList.map(item => (
            <Nav.Link
                key={item.label}
                href={item.link}
                className={item.className}
                active={item.active}
            >
               {item.isBtn ? <button className="nav-bar__btn"> {item.label} </button> : item.label}
            </Nav.Link>
        ));

        return items;
    }

    render() {
        
        const closeBtnClassName = this.state.isOpened ? "nav-bar__toggle-close-btn" : " ";
        const classes = classNames(
            "nav-bar__toggle-btn",
            closeBtnClassName,
        );
        const { navBarItems } = this.props
        const primaryNav = this.getLinkItems(navBarItems.primaryNav);
        const secondaryNav = this.getLinkItems(navBarItems.secondaryNav);
        const authNav = this.getLinkItems(navBarItems.authNav);
          
        return (
            <div className="nav-bar">
                <Navbar className="header__nav-bar" expand="lg">
                    <Nav.Link className="nav-bar__logo" href="/">
                        <img className="nav-bar__logo-img" src={navBarItems.logoSrc} />
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