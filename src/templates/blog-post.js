import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolio(slug: { eq: $slug }) {
      id
      title
      description {
        description
      }
      createdAt(formatString: "MMMM DD, YYYY")
      image {
        gatsbyImage(width: 400)
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const contentfulPortfolio = data.contentfulPortfolio
  const hasImage = contentfulPortfolio.image && contentfulPortfolio.image.gatsbyImage

  return (
    <Layout>
      <div className="content">
        <h1>{contentfulPortfolio.title}</h1>
        <span className="meta">Posted on {contentfulPortfolio.createdAt}</span>
        <br />
        <span className="meta">
          {contentfulPortfolio.description.description}
        </span>
        <br />
        {hasImage && (
          <GatsbyImage className="featured"
            alt={contentfulPortfolio.title}
            image={contentfulPortfolio.image.gatsbyImage}
          />
        )}
      </div>
    </Layout>
  )
}

export default BlogPost
