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
    <>
      <input type="checkbox" id="toggle" />
      <label className="hamburger" htmlFor="toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="menu">
        <ul>
          <li key="/about/">
            <Link
              to="/about/"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              about
            </Link>
          </li>{" "}
          {data.allSitePage.nodes.map(node => (
            <li key={node.path}>
              <Link
                to={node.path}
                style={{
                  color: "black",
                  textDecoration: "none",
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
              <span
                style={{
                  color: "black",
                }}
              >
                year
              </span>
              <YearMenu />
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
