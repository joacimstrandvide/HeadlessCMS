import * as React from "react"
import useNavigation from "../hooks/use-navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const navigation = useNavigation();

  return (
    <>
      <header>
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
      <footer>Footer</footer>
    </>
  );
}

export default Layout
