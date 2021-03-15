import React, { Component } from 'react'

class Match extends Component {
  render() {
    const {team1, team2, event, isLive} = this.props
    return(
      <li>
        {isLive ? <span className="live">&bull; LIVE</span> : null}
        <div className="event">{event}</div>
        <div className="team1">{team1}</div>
        <div className="vs">VS</div>
        <div className="team2">{team2}</div>
      </li>
    )
  }
}

export default Match