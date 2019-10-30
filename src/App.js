import React, { Fragment } from 'react';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

class App extends React.Component {
    render () {
        return (
            <Fragment>
                <NavBar />
            </Fragment>
        );
    }
}

export { App };