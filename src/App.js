import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    const mon = this.state.monsters.map((monster) => {
      return (
        <React.Fragment>
          <h5 key={monster.id}> {monster.name} </h5>
          <p> {monster.email} </p>
        </React.Fragment>
      );
    });
    return (
      <div className="App">
        <CardList monsters ={this.state.monsters} />
        {mon}
      </div>
    );
  }
}

export default App;
