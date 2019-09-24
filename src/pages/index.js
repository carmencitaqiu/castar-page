import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    <div className="container">
      <div className="row">
        <div className="titleWrapper">
          <h1>Import duties,taxes,and fee calculator</h1>
          <p className="subTitle">Estimate your duties and fees using this simple calculator</p>
        </div>
      </div>
    </div>
    <div className="formWrapper">
      <div className="container">
        <div className="row">
          <div style={{marginTop:`43px`,paddingLeft:`0`}} className="col-md-5 col-sm-12 col-xs-12">
            <form>
              <div className="form-group">
                <label className="formLabel">What are you importing</label>
                <input type="text" className="form-control form-input" placeholder="Enter the title"/>
              </div>
              <div className="form-group">
                <label className="formLabel">Describe your item...</label>
                <textarea className="form-control form-input" rows="3" placeholder="Enter the describe" resize="none"></textarea>
              </div>
              <div className="form-group">
                <label className="formLabel">Select a category...</label>
                <select className="form-control form-input">
                  <option defaultValue>Select a category</option>
                  <option>2</option>
                </select> 
              </div>
              <div className="form-group">
                <label className="formLabel">Select a shipping type...</label>
                <select className="form-control form-input">
                  <option defaultValue>Select a shipping type</option>
                  <option>2</option>
                </select> 
              </div>
            </form>
          </div>
          <div style={{marginTop:`43px`,paddingLeft:`0`}} className="col-md-5 col-sm-12 col-xs-12 offset-md-2">
            <h5 className="rightSubTitle">HS 0202.20.06.00</h5>
            <h2 className="rightTitle">Duty:$50.00/kg</h2>
            <div className="info-wrapper">
              <span className="info-title">Special Duty</span>
              <p className="info-desc">Free:A+,AU,BH,CA,CL,CO,D,E*,IL,JO,KR,MA,MX,OM,P,PA,PE,SG Confused about Special Duties?Talk to one of our
                <span className="info-experts">Customs Experts</span>
              </p>
            </div>
            <span className="create-tip">Create your free account today</span>
            <a className="info_start">Get Started</a>
          </div>
          </div>
        </div>
    </div>
    <div className="articleWrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <h1 className="article_title">What is a customs duty?</h1>
            <p className="article_content">
              One of the ways we bring value to our customers is the full suite of logistics and technology services we provide.The ability to offer multiple transportation services on one technology platform enables us to be a true single source solution for our customers.
            </p>
            <a className="article_link">Small CTA link</a>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="img_container"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="articleWrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="img_container"></div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <h1 className="article_title">How are duty rates determined?</h1>
            <p className="article_content">
              One of the ways we bring value to our customers is the full suite of logistics and technology services we provide.The ability to offer multiple transportation services on one technology platform enables us to be a true single source solution for our customers.
            </p>
            <a className="article_link">Small CTA link</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
