import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerMap from './components/PlayerMap';
import Header from './components/Header';





class App extends React.Component {
  state = {
    players: [],
  };

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data)
      this.setState({
        players:res.data
      })
    })
    .catch(err => console.log(err,'error'))
  }

  

  render(){
    return (
      <div className='app'>
        <Header />
        <PlayerMap className='player-cont' players={this.state.players} />


      </div>
    )
  }
}

export default App;
