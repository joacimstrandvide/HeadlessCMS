import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutTemplate from "../templates/about-template"
import HomeTemplate from "../templates/home-template"
import PortfolioTemplate from "../templates/portfolio-template"
import ContactTemplate from "../templates/contact-template"

const Page = props => {
  /* Här skapar vi en sida beroende på vilken länk som användaren valt */
  const { data } = props
  const { contentfulPage } = data
  const getTemplate = contentfulPage => {
    /* Switch statement för att returnera ett visst template beroende på vad man väljer */
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

/* Hämtar de olika sidorna */
export const query = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      template
      content {
        raw
      }
      image {
        gatsbyImage(width: 500)
      }
    }
  }
`

export default Page
