import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  line-height: 1;
  font-weight: ${props => props.fontWeight || 500};
  margin: 0 2rem 0 0;
  padding: 0.5rem 0;
  text-decoration: none;

  &.active {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      background-color: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 1240px) / 2);
    `}
  >
    {/* <div className="container"> */}
    <NavLink
      to="/"
      fontWeight="bold"
      css={css`
        margin: 0;
      `}
    >
      Tech Blog
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="active">
        About
      </NavLink>
    </nav>
    {/* </div> */}
  </header>
)

export default Header
