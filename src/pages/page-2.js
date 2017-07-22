import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Page2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Dan, Pat <span style={{ fontSize: '24px' }}>&</span> Nate</h1>
        <p>Site built using Gatsby 🍍</p>
        <div className="gatsby-highlight">
          <pre className="language-js">
            <code>
              lkshdlkgjhdsghsdlkgfhdlshgflksdhgkh
            </code>
          </pre>
        </div>
        <Link to="/">To blog</Link>
      </div>
    )
  }
}
