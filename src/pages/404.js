import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

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
          </>
        )
      })}
    </Layout>
  )
}

export default NotFoundPage
