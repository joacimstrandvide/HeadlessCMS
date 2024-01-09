import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import AboutTemplate from "../templates/about-template"
import HomeTemplate from "../templates/home-template"
import PortfolioTemplate from "../templates/portfolio-template"
import ContactTemplate from "../templates/contact-template"

const Page = props => {
  const { data } = props
  const { contentfulPage } = data
  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case "about":
        return <AboutTemplate {...contentfulPage} />
      case "portfolio":
        return <PortfolioTemplate {...contentfulPage} />
      case "contact":
        return <ContactTemplate {...contentfulPage} />
      default:
        return <HomeTemplate {...contentfulPage} />
    }
  }
  return <Layout>{getTemplate(contentfulPage)}</Layout>
}

export const query = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      content {
        raw
      }
      image {
        gatsbyImage(width: 300)
      }
    }
  }
`

export default Page
