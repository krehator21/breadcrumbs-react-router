import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Forside } from './views/Forside';
import { Saksliste } from './views/Saksliste';
import { Sak } from './views/Sak';
import { NavBar } from './NavBar';


class App extends Component {

  constructor(){
    super();
    this.state = {
      nav: [
          ["/", "Forside"],
          ["/", "Løsøreregisteret"]
      ]
  }
}

  sayHello = () => {
    alert("hello")
  };

  addToNavBar = (path, displayName) => {
    this.setState(prevState => ({
        nav: [...prevState.nav, [path, displayName]]}));
      console.log(this.state.nav);
  };

  rollBackNavBar = (destination) => {
    console.log("roll back to", destination);
    this.setState(prevSate => ({
        nav: prevSate.nav.slice(0, destination + 1)}));
  };

  render() {
    return (
      <Router>
      <div>
        <NavBar nav={this.state.nav} rollBackNavBar={this.rollBackNavBar}/>
          <br/><br/>
          <Route exact path="/" render={() => <Forside addToNavBar={this.addToNavBar} />} />
          <Route path="/saksliste" render={() => <Saksliste addToNavBar={this.addToNavBar} />}/>
          <Route path="/sak/:id?" render={({match}) => <Sak addToNavBar={this.addToNavBar} match ={match} />}/>
        </div>
    </Router>
    );
  }
}

export default App;
