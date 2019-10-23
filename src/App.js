import React, { Fragment } from 'react';
import { NavBar } from './components/NavBar';
import { ImageCarousel } from './components/ImageCarousel';
import './style.scss';

class App extends React.Component {
    render () {
        return (
            <Fragment>
                <NavBar />
                <ImageCarousel />
            </Fragment>
        );
    }
}

export { App };