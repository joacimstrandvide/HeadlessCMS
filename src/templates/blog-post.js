import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query {
    allContentfulPortfolio {
      edges {
        node {
          id
          title
          createdAt(formatString: "MMMM DD, YYYY")
          image {
            gatsbyImage(width: 300)
          }
        }
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const contentfulPortfolio = data.allContentfulPortfolio.edges[1].node

  return (
    <Layout>
      <div className="content">
        <h1>{contentfulPortfolio.title}</h1>
        <span className="meta">
          Posted on {contentfulPortfolio.createdAt}
        </span>

        <GatsbyImage
          className="featured"
          alt={contentfulPortfolio.title}
          image={contentfulPortfolio.image.gatsbyImage}
        />
      </div>
    </Layout>
  )
}

export default BlogPost
