import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


const PortfolioTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            id
            title
            description {
              description
            }
            image {
              gatsbyImage(width: 300)
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ul className="items">
        {data.allContentfulPortfolio.edges.map(edge => {
          const hasImage = edge.node.image && edge.node.image.gatsbyImage

          return (
            <li className="item" key={edge.node.id}>
              <h3>{edge.node.title}</h3>
              {hasImage && (
                <GatsbyImage
                  alt={edge.node.title}
                  image={edge.node.image.gatsbyImage}
                />
              )}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioTemplate
