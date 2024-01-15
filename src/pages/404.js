import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

const NotFoundPage = () => {
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
    <Layout>
      {data.allContentfulError.edges.map(edge => {
        return (
          <>
            <h1>{edge.node.title}</h1>
            <p>{edge.node.value}</p>
            <Link to="/">Till Hem</Link>
          </>
        )
      })}
    </Layout>
  )
}

export default NotFoundPage
