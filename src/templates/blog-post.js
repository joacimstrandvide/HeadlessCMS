import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

export const query = graphql`
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
`

const BlogPost = props => {
  return (
    <Layout>
      <div className="content">
        <h1>{props.data.contentfulPortfolio.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulPortfolio.createdAt}
        </span>

        <GatsbyImage
          className="featured"
          alt={props.data.contentfulPortfolio.title}
          image={props.datacontentfulPortfolio.image.gatsbyImage}
        />
      </div>
    </Layout>
  )
}

export default BlogPost
