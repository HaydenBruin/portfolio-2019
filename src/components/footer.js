import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__contact">
                    <div className="dash"></div>
                    <p>Have a project or job opportunity you’d like to discuss? I'd love to hear from you.</p>
                    <p>Send me a message <a href="mailto:bruinhayden@gmail.com">bruinhayden@gmail.com</a></p>
                </div>
                <div className="footer__copyright">
                    <p>Copyright &copy; Hayden Bruin</p>
                    <p>Front-end Developer @ Cucumber</p>
                </div>
            </footer>
        )
    }
}
