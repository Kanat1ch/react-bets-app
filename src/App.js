import HLTV from 'hltv'
import { Component } from 'react';
import Match from './Components/Match/Match'
import './App.scss'

class App extends Component {

  state = {
    data: []
  }

  async componentDidMount() {
    try {
      const data = await HLTV.getMatches()
      const matches = data.map(match => {
        if (!match.team1 || !match.team2) {
          return {
            id: match.id,
            team1: 'TBA',
            team2: 'TBA'
          }
        } else {
          return {
            id: match.id,
            team1: match.team1.name,
            team2: match.team2.name,
            event: match.event.name,
            isLive: match.live
          }
        }
        
      })
      this.setState({
        data: matches
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>HLTV Api</h1>
          <ul>
          {this.state.data.length !== 0 
          ? this.state.data.map((match) => {
            if (match.team1 === 'TBA' || match.team2 === 'TBA') {
              return null
            } else
            return(
              <Match
                key={match.id}
                id={match.id}
                team1={match.team1}
                team2={match.team2}
                event={match.event}
                isLive={match.isLive}
              />
            )
          })
          : null}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
