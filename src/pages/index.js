import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>First day 🍊</h1>
        <p>
          Whe gap quickly grew out to five minutes as Hardy led the group over the day second climb, the Cote de Breziers. Team Sky were willing to let the gap move out as they were not interested in a potentially risky bunch sprint.
          Next up was the Col de Pointu, another third category climb. Coming 45km before the finish, it offered a launch pad for anyone wanting to break from the group or peloton. The lead group was no longer as unified as it had been, and with 2.5km to the top, Kiserlovski, Gesbert and Sicard took off. Sicard led the way at the top.
          Gallopin dangled at the end of the group, shot up to the front, and then fell back again, struggling to even stay in sight of the group. Mollema took off on the descent, as it changed from a unified group to every man for himself. He too was brought back, as the group started working together again on the flat.
          Too many teams were still looking for a first stage win. Attack followed attack, and with 18km left the break split into two almost equally sized groups.
        </p>
        <Link to="/page-2/">About Dan, Pat & Nate</Link>
      </div>
    )
  }
}
