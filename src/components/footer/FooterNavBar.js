import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "../../reactComponents/Link";
import { links } from "../../resources/navbarConstants";

class FooterNavBar extends React.Component {
    render() {
        const bottomPart = links.bottomPart.map(item => (
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