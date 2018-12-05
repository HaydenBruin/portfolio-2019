import React, { Component } from 'react';
import { Link } from 'gatsby'

class Project extends Component {
    render() {
        return (
            <Link to={'/projects/' + this.props.project.slug + '/'} className="projects__project">
                <div className="projects__project--imgwrapper">
                    <img src={this.props.project.media} alt={this.props.project.title} />
                </div>
                <div className="projects__project--content">
                    <div className="date">{this.props.project.date}</div>
                    <div className="dash"></div>
                    <div className="title">{this.props.project.title}</div>
                    <div className="role">{this.props.project.role}</div>
                    <div className="tags">
                        {
                            this.props.project.tags.map((tag, index) => {
                                return <div key={index} className={"tag " + tag.toLowerCase()}>{tag}</div>
                            })
                        }
                    </div>
                </div>
            </Link>
        )
    }
}

export default Project
