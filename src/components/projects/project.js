import React, { Component } from 'react';
import { Link } from 'gatsby'

class Project extends Component {
    render() {
        const project = this.props.project;
        return (
            <Link to={project.path} className="projects__project">
                <div className="projects__project--imgwrapper">
                    <img src={project.media} alt={project.title} />
                </div>
                <div className="projects__project--content">
                    <div className="date">{project.date}</div>
                    <div className="dash"></div>
                    <div className="title">{project.title}</div>
                    <div className="role">{project.role}</div>
                    {
                        project.tags && (
                            <div className="tags">
                                {
                                    project.tags.split(',').map((tag, index) => {
                                        return <div key={index} className={"tag " + tag.toLowerCase()}>{tag}</div>
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </Link>
        )
    }
}

export default Project
