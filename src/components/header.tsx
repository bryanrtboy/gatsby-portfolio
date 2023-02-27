import { Link, graphql } from 'gatsby'
import * as React from 'react'
import Menu from './menu'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            margin: 0,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h5>
        <Menu> </Menu>
      </h5>
    </div>
  </header>
)

export default Header
