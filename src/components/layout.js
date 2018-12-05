import React, { Fragment, Component } from 'react'
import Header from './header';
import Footer from './footer';
import '../scss/_load.scss';

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </Fragment>
        )
    }
}