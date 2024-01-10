import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ContactTemplate = contentfulPage => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSocials {
        edges {
          node {
            title
            link
          }
        }
      }
    }
  `)
  return (
    <div className="contact">
      {data.allContentfulSocials.edges.map(edge => {
        return (
          <a className="contact-item" href={edge.node.link}>
            {edge.node.title}
          </a>
        )
      })}
    </div>
  )
}

export default ContactTemplate
