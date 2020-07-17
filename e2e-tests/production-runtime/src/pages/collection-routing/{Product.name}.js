import React from "react"
import { unstable_createPagesFromData, Link, graphql } from "gatsby"

import Layout from "../../components/layout"

export default function BlogPost({ data: { product } }) {
  return (
    <Layout>
      <h1>{product.id}</h1>
      <h2 data-testid="name">{product.name}</h2>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query GetBlogPostBySlugCollection($name: String!) {
    product(name: { eq: $name }) {
      id
      name
    }
  }
`