import React, { Component } from 'react'
import Project from './project';

class Projects extends Component {

    state = {
        projects: []
    }

    componentDidMount = () => {
        this.loadProjects();
    }

    loadProjects = async () => {
        const response = await fetch('/data/projects.json');
        const projects = await response.json();

        if(projects.length)
        {
            this.setState({
                projects: projects
            })
        }
    }

    render() {
        if(!this.state.projects) return null;
        return (
            <div className="projects">
                {
                    this.state.projects.map((project, index) => {
                        return <Project key={index} project={project} />
                    })
                }
            </div>
        )
    }
}

export default Projects