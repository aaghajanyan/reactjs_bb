import React, { Fragment } from "react";
import { ImageCarousel } from "./ImageCarousel";

class Workouts extends React.Component {
    render () {
        return (
            <Fragment>
                <ImageCarousel />
            </Fragment>
        );
    }
}

export { Workouts };