import React, { Fragment } from 'react';
import { NavBar } from './components/NavBar';
import { ImageCarousel } from './components/ImageCarousel';
import './style.scss';
import { Programs } from './components/programs/Programs';

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