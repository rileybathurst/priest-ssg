import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
// import Image from "../components/image"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiService.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.Title}</Link>
          </h2>
          <p>{document.node.Content}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>

    <ul>
      {data.allStrapiPage.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.Content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiService {
      edges {
        node {
          id,
          Title,
          Content
        }
      }
    }

  allStrapiPage {
      edges {
        node {
          id,
          title,
          content
        }
      }
    }
  }
`