import { Link, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

export default function YearMenu() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "year" } }
        sort: { name: ASC }
      ) {
        nodes {
          name
        }
      }
    }
  `)
  return (
    <ul
      class="child-menu"
      style={{
        padding: "2px",
      }}
    >
      {data.allFile.nodes.map(node => (
        <li
          key={node.name}
          style={{
            padding: "2px",
          }}
        >
          <a
            href={"/year/" + node.name}
            style={{
              textDecoration: "none",
              color: "black",
              padding: "2px",
            }}
          >
            {node.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
