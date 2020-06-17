import React, { Component } from 'react'
import './App.css'
import Header from './components/header'

class App extends Component {

  state = {
    pseudo: this.props.match.params.pseudo
  }

  render() {
    return (
      <div className = 'box'>
        <Header pseudo = { this.state.pseudo }/>
        <div className = 'cards'>
          <div className = 'card'>
            <h2>Une carte</h2>
          </div>
        </div>
      </div>
    )
  }
}


export default App