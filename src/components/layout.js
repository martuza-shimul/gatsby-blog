import React from "react"
import { Global, css } from "@emotion/react"
import Helmet from "react-helmet"
import Header from "./header"
import useSiteMetadata from "../hooks/use-sitemetadata"

const Layout = ({ children }) => {
  const { title, description, author } = useSiteMetadata()
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the main div that Gatsby mounts into*/
            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
            a {
              text-decoration: none;
              color: #111;
            }
            .container {
              max-width: 1280px;
              padding: 0 20px;
              margin: 0 auto;
            }
          }
        `}
      />

      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
      </Helmet>
      <Header />
      <main>{children} </main>
    </>
  )
}

export default Layout
