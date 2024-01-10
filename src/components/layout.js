import React from "react"
import useNavigation from "../hooks/use-navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import { Link } from "gatsby"
import Footer from "./footer"

const Layout = ({ children }) => {
  const navigation = useNavigation();

  return (
    <>
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
  );
}

export default Layout
