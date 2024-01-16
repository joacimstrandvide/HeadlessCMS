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
              description {
                description
              }
              createdAt(formatString: "MMMM DD, YYYY")
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
      <ul className="portfolio-items">
        {data.allContentfulPortfolio.edges.map(edge => {
          const hasImage = edge.node.image && edge.node.image.gatsbyImage
          return (
            <li className="portfolio-item" key={edge.node.id}>
              <h2>
                <Link to={`/portfolio/${edge.node.slug}/`}>
                  {edge.node.title}
                </Link>
              </h2>
              {hasImage && (
                <GatsbyImage className="portfolio-img"
                  alt={edge.node.title}
                  image={edge.node.image.gatsbyImage}
                />
              )}
              <div className="portfolio-meta">
                <span>Posted on {edge.node.createdAt}</span><br />
                <span>{edge.node.description.description}</span>
              </div>
              <div className="portfolio-button">
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
