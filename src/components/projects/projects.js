import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
//import Project from './project'
//<Project key={index} project={project} />
const Projects = ({ data }) => (
    <div className="projects">
    {
        data.allMarkdownRemark.edges.map((project) => {
            <Project project={project.node.frontmatter} />
        })
    }
    </div>
  )

export default props => (
    <StaticQuery
      query={graphql`
      {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                path
                title
                role
                company
                companylogo
                media
                medialarge
                tags
              }
            }
          }
        }
      }      
      `}
      render={data => <Projects data={data} {...props} />}
    />
  )