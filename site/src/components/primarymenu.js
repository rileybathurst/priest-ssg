import React from "react"
import { graphql } from "gatsby"

const PrimaryMenu = ({ data }) => 
    <pre>
        something
        {JSON.stringify(data, null, 4)}
        {/* {data.allStrapiMenu.edges.map(document => (
            {document.node.title}
        ))}
        else */}
    </pre>

export const query = graphql`
  {
    allStrapiMenu {
      edges {
        node {
          pages {
            id
            title
          }
        }
      }
    }
  }
`

export default PrimaryMenu