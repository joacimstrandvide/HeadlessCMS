import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PortfolioTemplate = () => {
  /* Hämta data från portföljen och sortera efter senast uppdaterad */
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
        {/* mapa ut all data vi hämtat */}
        {data.allContentfulPortfolio.edges.map(edge => {
          /* använder detta för att se om ett item har en bild */
          const hasImage = edge.node.image && edge.node.image.gatsbyImage
          return (
            <li className="portfolio-item" key={edge.node.id}>
                {/* Titel och länk till individuella sidan */}
              <h2>
                <Link to={`/portfolio/${edge.node.slug}/`}>
                  {edge.node.title}
                </Link>
              </h2>
              {/* Bild */}
              {hasImage && (
                <GatsbyImage
                  className="portfolio-img"
                  alt={edge.node.title}
                  image={edge.node.image.gatsbyImage}
                />
              )}
              {/* Mer information om projektet */}
              <div className="portfolio-meta">
                <span>Posted on {edge.node.createdAt}</span>
                <br />
                <span>{edge.node.description.description}</span>
              </div>
              {/* Knapp med länk till projektet, samma som titeln */}
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
