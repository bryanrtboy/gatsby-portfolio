import { Link, graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import YearMenu from "./yearMenu"

export default function Menu() {
  const data = useStaticQuery(graphql`
    query {
      allSitePage(filter: { path: { regex: "/(work)/" } }) {
        nodes {
          path
          id
          parent {
            id
          }
        }
      }
    }
  `)
  return (
    <ul>
      <li
        key="/about/"
        style={{
          textDecoration: "none",
          display: "inline",
        }}
      >
        <Link
          to="/about/"
          style={{
            color: "black",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          about
        </Link>
      </li>{" "}
      {data.allSitePage.nodes.map(node => (
        <li
          key={node.path}
          style={{
            textDecoration: "none",
            display: "inline",
          }}
        >
          <Link
            to={node.path}
            style={{
              color: "black",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            {node.path.replace(/\/work\//g, "").replace(/\/$/, "")}
          </Link>
        </li>
      ))}
      <li
        style={{
          textDecoration: "none",
          display: "inline",
        }}
      >
        <div
          class="parent-menu"
          style={{
            textDecoration: "none",
          }}
        >
          year
          <YearMenu />
        </div>
      </li>
    </ul>
  )
}
