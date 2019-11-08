import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class FooterNavBar extends React.Component {
    static propTypes = {
        navBarItems: PropTypes.array
    }
    
    render() {
        const bottomPart = this.props.navBarItems.map(item => (
            <NavLink
                key={item.label}
                to={item.link}
                className={item.className}
            >
                {item.label}
            </NavLink>
        ));

        return (
            <Navbar className="footer-nav-bar">
                <Nav className="footer-nav-bar__footer-nav-items">
                    {bottomPart}
                </Nav>
            </Navbar>
        );
    }
}

export { FooterNavBar };