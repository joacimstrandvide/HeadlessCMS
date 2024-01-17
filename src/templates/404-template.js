import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const NotFoundPage = () => {
  /* Hämta datan */
  const data = useStaticQuery(graphql`
    query {
      allContentfulError {
        edges {
          node {
            title
            value
          }
        }
      }
    }
  `)

  return (
    <>
    {/* Skriv ut datan för 404 not found och visa en länk tillbaks till startsidan */}
      {data.allContentfulError.edges.map(edge => {
        return (
          <>
            <h1>{edge.node.title}</h1>
            <p>{edge.node.value}</p>
            <Link to="/">Till Hem</Link>
          </>
        )
      })}
    </>
  )
}

export default NotFoundPage
