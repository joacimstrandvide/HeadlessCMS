import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


//react-component
//alla componenter under /src/pages blir automatiskt sidor
//sidans namn = namnet på javascript-filen (dock - index.js = sajtens första sida)
const IndexPage = () => (
  <Layout>
    <Link id="portfolio-link" to="/portfolio">Portfölj</Link>
  </Layout>
)
//denna konstant sätter titeln på sidan
export const Head = () => <title>Home Page</title>

export default IndexPage;
