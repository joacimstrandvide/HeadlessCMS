import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
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
    <div className="socials">
      {data.allContentfulSocials.edges.map(edge => {
        return (
          <a className="socials-item" href={edge.node.link}>
            {edge.node.title}
          </a>
        )
      })}
    </div>
  )
}

export default Footer
