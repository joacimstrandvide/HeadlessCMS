import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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

  const richTextConfig = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
  }
  return (
    <div className="contact">
      <h2>{contentfulPage.title}</h2>
      <p>{renderRichText(contentfulPage.content, richTextConfig)}</p>
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
