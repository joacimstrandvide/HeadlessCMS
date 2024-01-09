import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <h3>Sidan du letar efter finns inte eller har flyttats.</h3>
    <p>
      <Link to="/">Till Hem</Link>
    </p>
  </Layout>
)

export const Head = () => <title>Portfolio Page</title>

export default NotFoundPage
