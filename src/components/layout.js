import React from "react"
import useNavigation from "../hooks/use-navigation"
import { Helmet } from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import { graphql, useStaticQuery, Link } from "gatsby"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  const navigation = useNavigation()

  return (
    <>
      <Helmet>
        <meta name="description" content={data.site.siteMetadata.title} />
        <meta name="author" content={data.site.siteMetadata.author} />
      </Helmet>
      <header>
        {/* Navigations meny */}
        <nav>
          <ul>
            {navigation.map(({ node }) => (
              <li key={node.url}>
                <Link to={node.url}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
