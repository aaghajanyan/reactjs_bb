import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "../reactComponents/Link";
import { links, NavBarConstants } from "../resources/navbarConstants";

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
            iconClassName: this.state.isOpened ? "" : "isClose"
        });
    }

    render() {
        const leftItems = links.leftPart.map(item => (
            <Link
                key={item.label}
                href={item.link}
                type={item.isBtn}
                className={item.className}
                active={item.active}
                onClick={() => {
                    console.log("clicked");
                }}
            >
                {item.label}
            </Link>
        ));

        const rightItems = links.rightPart.map(item => (
            <Link
                key={item.label}
                href={item.link}
                type={item.isBtn}
                className={item.className}
                onClick={() => {
                    console.log("clicked");
                }}
            >
                {item.label}
            </Link>
        ));

        const rightBtn = links.rightPartBtn.map(item => (
            <Link
                key={item.label}
                href={item.link}
                type={item.isBtn}
                className={item.className}
                onClick={() => {
                    console.log("clicked");
                }}
            >
                {item.label}
            </Link>
        ));

        return (
            <Navbar id="nav-bar-content" expand="lg">
                <Nav.Link className="nav-bar-logo" to="#home">
                    <img className="nav-bar-logo-img" src={NavBarConstants.logoSrc} />
                </Nav.Link>
                <Navbar.Toggle
                    onClick={this.changeIcon}
                    aria-controls="responsive-navbar-nav"
                    className={this.state.iconClassName}
                    id="toggle-btn"
                />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    data-toggle={this.state.classNav}
                    className="mr-auto link-container"
                >
                    <Nav className="nav-bar-left-items">
                        <Nav>{leftItems}</Nav>
                    </Nav>
                    <hr className="line" />
                    <Nav className="nav-bar-right-items">{rightItems}</Nav>
                    <hr className="line" />
                    <Nav id="auth-btn" className="nav-bar-right-btn">
                        {rightBtn}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export { NavBar };