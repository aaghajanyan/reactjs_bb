import React, { Fragment } from "react";
import { ImageCarousel } from "./ImageCarousel";
import { Programs } from "./programs/Programs";

class Workouts extends React.Component {
    render () {
        return (
            <Fragment>
                <ImageCarousel />
                <Programs />
            </Fragment>
        );
    }
}

export { Workouts };