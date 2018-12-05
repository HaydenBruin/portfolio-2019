import React, { Component } from 'react';
import { Link } from 'gatsby'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        {
                            ([
                                { url: '/', title: 'Home' },
                                { url: '/projects/', title: 'Projects' }
                            ]).map((link, index) => {
                                return (
                                    <li key={index}><Link to={link.url}>{link.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}
