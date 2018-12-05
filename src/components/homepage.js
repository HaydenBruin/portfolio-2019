import React, { Fragment, Component } from 'react'

import Hero from './hero';
import Projects from './projects/projects';


export default class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <Hero />
                <Projects />
            </Fragment>
        )
    }
}
