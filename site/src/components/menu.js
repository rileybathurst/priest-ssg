import React from "react"
import { useStaticQuery, graphql } from "gatsby"

{/* I dont think this should be a static query I am just struggling to make it work otherwise */}
const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
        allStrapiMenu {
            edges {
              node {
                id
                title
                pages {
                  title
                  id
                }
              }
            }
          }
    }
  `)

  return (
    <>
        <hr />
        <ul>
        {data.allStrapiMenu.edges.map(document => (
            <li key={document.node.id}>
            <h2>
                {document.node.title}
                {document.node.title.title}
            </h2>
            </li>
        ))}
        </ul>
    </>
  )
}

export default Menu
