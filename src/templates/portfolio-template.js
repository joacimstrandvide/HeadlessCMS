import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PortfolioTemplate = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPortfolio(sort: { updatedAt: ASC }) {
          edges {
            node {
              id
              title
              slug
              image {
                gatsbyImage(width: 300)
              }
            }
          }
        }
      }
    `
  )
  return (
    <>
      <p>
        <Link to="/">Till Hem</Link>
      </p>
      <ul className="posts">
        {data.allContentfulPortfolio.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/portfolio/${edge.node.slug}/`}>
                  {edge.node.title}
                </Link>
              </h2>
              {/* <GatsbyImage
                className="featured"
                alt={edge.node.title}
                image={edge.node.image.gatsbyImage}
              /> */}
              <div className="meta">
                <span>Posted on {edge.node.createdAt}</span>
              </div>
              <div className="button">
                <Link to={`/portfolio/${edge.node.slug}/`}>Läs Mer</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default PortfolioTemplate
