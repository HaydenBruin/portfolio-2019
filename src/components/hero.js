import React, { Component } from 'react'

import Icon from "./utils/icons"

export default class Hero extends Component {

    scrollDown = () => {
        console.log('scroll down');
    }

    render() {
        return (
            <div className="hero-block">
                <div className="hero">
                    <div className="hero__content">
                        <h1>Hi, I'm Hayden Bruin</h1>
                        <h2>I <Icon name="heart" height="24" width="24" /> <span>React</span></h2>
                    </div>
                    <div className="hero__footer">
                        <div onClick={() => this.scrollDown()}>
                            <Icon name="arrow-down" width="48px" height="48px" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
