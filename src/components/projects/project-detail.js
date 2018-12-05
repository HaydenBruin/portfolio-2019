import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProjectDetail extends Component {

    project = this.props.projects.find(proj => {
        return proj.slug === this.props.match.params.project;
    })

    render() {
        return (
            <Fragment>
                <div className="project">
                    <div className="project__project">
                        <div className="project__project--imgwrapper">
                            <img className="real" src={this.project.medialarge} alt={this.project.title} />
                            <img className="blur" src={this.project.medialarge} alt={this.project.title} />
                        </div>
                        <div className="project__project--content container">
                            <div className="detail">
                                <div className="date">{this.project.date}</div>
                                <div className="dash"></div>
                                <div className="title">{this.project.title}</div>
                                <div className="role">{this.project.role}</div>
                                <div className="tags">
                                    {
                                        this.project.tags.map((tag, index) => {
                                            return <div key={index} className={"tag " + tag.toLowerCase()}>{tag}</div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="detail company">
                                <div className="dash"></div>
                                <img src={this.project.companylogo} alt={this.project.company} />
                            </div>
                        </div>
                    </div>
                    <div className="project__description">
                        <div className="container">
                            <div className="project__description--content"  dangerouslySetInnerHTML={{__html: this.project.description.join("")}}></div>
                            <div className="project__description--back">
                                <Link to="/projects/">Interested in more? Take a look at my other work</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    projects: state.projects
})

export default connect(mapStateToProps)(ProjectDetail)