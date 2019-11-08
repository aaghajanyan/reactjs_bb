import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

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
        this.manageScroll = this.manageScroll.bind(this);
    }

    manageScroll() {
        if(!this.state.isOpened) {
            window.scroll({
               top: 0
            });
            document.body.classList.add("hide-scroll");
        } else {
            document.body.classList.remove("hide-scroll");
        }
    }

    changeIcon() {
        const waitingTime =  this.state.isOpened ? 300 : 0;
        this.manageScroll();

        setTimeout(() => {
            this.setState({
                isOpened: !this.state.isOpened
            });
        }, waitingTime);
    }


    getLinkItems(itemsList) {
        const items = itemsList.map(item => (
            <NavLink key={item.label} to={item.link} className={item.className} >
               {item.isBtn ? <button className="nav-bar__btn"> {item.label} </button> : item.label}
            </NavLink>
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
                    <NavLink className="nav-bar__logo" to="/">
                        <img className="nav-bar__logo-img" src={navBarItems.logoSrc} />
                    </NavLink>
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