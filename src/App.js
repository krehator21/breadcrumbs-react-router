import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Forside } from './views/Forside';
import { Saksliste } from './views/Saksliste';
import { Sak } from './views/Sak';
import { NavBar } from './nav/NavBar';

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
    const navBarMinSize = 1;
    return (
      <Router>
      <div>
        <NavBar navBarMinSize={navBarMinSize} nav={this.state.nav} rollBackNavBar={this.rollBackNavBar}/>
          <br/><br/>
          <Route exact path="/" render={() => <Forside addToNavBar={this.addToNavBar} />} />
          <Route exact path="/saksliste" render={() => <Saksliste addToNavBar={this.addToNavBar} />}/>
          <Route path="/saksliste/sak/:id?" render={(props) => <Sak {...props} addToNavBar={this.addToNavBar} />}/>
        </div>
    </Router>
    );
  }
}

export default App;
