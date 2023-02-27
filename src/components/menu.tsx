import { Link, graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

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
      {' '}
      {data.allSitePage.nodes.map((node) => (
        <li
          key={node.path}
          style={{
            textDecoration: 'none',
            display: 'inline',
          }}
        >
          <Link
            to={node.path}
            style={{
              color: 'black',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            {node.path.replace(/\/work\//g, '').replace(/\/$/, '')}
          </Link>
        </li>
      ))}
    </ul>
  )
}
