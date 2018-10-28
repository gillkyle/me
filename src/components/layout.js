import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Head from './head'
import Header from './header'

import './layout.css'
import { MARGIN } from '../styles/constants'
import { auto } from 'eol'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site }) => (
      <>
        <Head metaData={site.siteMetadata} />
        <Header location={location} siteTitle={site.siteMetadata.title} />
        {/* <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: MARGIN.default,
            paddingTop: 0,
          }}
        > */}
        {children}
        {/* </div> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
