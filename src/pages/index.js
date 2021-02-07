import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className="container">
      <h1>Tech Blog</h1>
      <p>Be independent</p>
      <Link to="/about/"> Check Author &rarr;</Link>
    </div>
  </Layout>
)
