/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className="formWrapper">
            <div className="container">
              <div style={{padding:`120px 0 110px 0`,borderBottom:`1px solid #93A1B0`}}  className="row">
                  <div className="col-md-5 col-sm-8 col-xs-8 footer_left">
                    <h4 >Castar</h4>
                    <p>Customs clearance for fast growing importers</p>
                  </div>
                  <div className="col-md-2 col-sm-4 col-xs-4 column_wrapper padding_reset">
                    <span className="column_title">Solutions</span>
                    <ul>
                      <li>
                        Importers & Traders
                      </li>
                      <li>
                        Enterprises
                      </li>
                      <li>
                        Ecommerce
                      </li>
                      <li>
                        By Industry and Goods
                      </li>
                    </ul>
                  </div>
                  <div  className="col-md-3 col-sm-4 col-xs-4 column_wrapper padding_reset">
                  <span className="column_title">Services</span>
                    <ul>
                      <li>
                        Customs Clearance
                      </li>
                      <li>
                        Import Agency
                      </li>
                      <li>
                        Freight Forwarding
                      </li>
                      <li>
                        Cold Chain & Perishables
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-2 col-sm-4 col-xs-4 column_wrapper padding_reset">
                  <span className="column_title">Company</span>
                    <ul>
                      <li>
                        Our Platform
                      </li>
                      <li>
                        About Us
                      </li>
                      <li>
                        Careers
                      </li>
                      <li>
                        24/7 Support
                      </li>
                    </ul>
                  </div>
              </div>
              <div className="row footerWrapper">
                <span className="legal_title">Legal</span>
                <p className="legal_desc">Customs brokerage services are provided by Flexport’s wholly-owned subsidiary, Flexport Customs LLC, a licensed customs brokerage with a national permit. International ocean freight forwarding services are provided by Flexport International LLC, a licensed Ocean Transportation Intermediary FMC# 025219NF. U.S. trucking services are provided by Flexport International, LLC, a FMCSA licensed property broker USDOT #2594279 and MC #906604-B. All transactions are subject to Flexport’s standard terms and conditions, available at www.flexport.com/terms 沪ICP备16041494号</p>
                <p style={{color:`#93A1B0`}}>
                  <span>Copyright © 2019 Flexport Inc.</span>
                  <span>| Privacy Policy </span>
                  <span>| Terms of Use</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
