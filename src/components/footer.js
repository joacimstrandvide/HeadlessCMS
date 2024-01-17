import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  /* Hämta data för footern */
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
      {/* mapa ut allt innehåll */}
      {data.allContentfulSocials.edges.map(edge => {
        /* Länk till olika social medier */
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
