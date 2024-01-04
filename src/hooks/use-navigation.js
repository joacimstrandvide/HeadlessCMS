import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const useNavigation = () => {
  const {allContentfulPage} = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: { url: ASC }) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)
  return allContentfulPage.edges
}

export default useNavigation;
