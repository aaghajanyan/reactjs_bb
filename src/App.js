import React, { Fragment } from "react";
import { NavBar } from "./components/NavBar";
import { ImageCarousel } from "./components/ImageCarousel";
import { Programs } from "./components/programs/Programs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

class App extends React.Component {
    render () {
        return (
            <Fragment>
                <NavBar />
                <ImageCarousel />
                <Programs />
            </Fragment>
        );
    }
}

export { App };