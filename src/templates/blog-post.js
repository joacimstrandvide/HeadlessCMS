import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

/* Hämtar data */
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
  /* Sätt datan i en variabel och fixa en variabel för bilden */
  const contentfulPortfolio = data.contentfulPortfolio
  const hasImage =
    contentfulPortfolio.image && contentfulPortfolio.image.gatsbyImage

  return (
    <Layout>
      <div className="course-page">
        {/* Titel */}
        <h1>{contentfulPortfolio.title}</h1>
        {/* Datum för projektet */}
        <span className="course-date">Posted on {contentfulPortfolio.createdAt}</span>
        <br />
        {/* Beskrivning */}
        <span className="course-desc">
          {contentfulPortfolio.description.description}
        </span>
        <br />
        {/* GatsbyImage */}
        {hasImage && (
          <GatsbyImage
            className="course-image"
            alt={contentfulPortfolio.title}
            image={contentfulPortfolio.image.gatsbyImage}
          />
        )}
      </div>
    </Layout>
  )
}

export default BlogPost
