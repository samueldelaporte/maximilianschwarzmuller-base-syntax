import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';


class App extends Component {
  state = {
    username: 'Joshua'
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
    
  }

  render() {
    return (
      <div className="App">
        <UserInput handleChange={this.changeUsername.bind(this)} initValue={this.state.username} />

        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
