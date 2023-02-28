import { Link, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

export default function YearMenu() {
  const data = useStaticQuery(graphql`
    query Links {
      allSitePage(filter: { path: { regex: "/(year)/.+/" } }) {
        nodes {
          path
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
      {data.allSitePage.nodes.map(node => (
        <li
          key={node.path}
          style={{
            padding: "2px",
          }}
        >
          <a
            href={node.path}
            style={{
              textDecoration: "none",
              color: "black",
              padding: "2px",
            }}
          >
            {node.path.replace(/\/year\//g, "").replace(/\/$/, "")}
          </a>
        </li>
      ))}
    </ul>
  )
}
