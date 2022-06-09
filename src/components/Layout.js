import React from "react"
import { GlobalStyle } from "./DesignSystemLayout"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      </Helmet>
      {children}
    </React.Fragment>
  )
}

export default Layout