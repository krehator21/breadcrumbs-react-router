import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import First from './views/First';
import Second from './views/Second';
import Third from './views/Third';
import NavBar from './NavBar';


class App extends Component {

  constructor(){
    super();
    this.state = {
      nav: [["/first", "Home"]]
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
          <Route path="/first" render={() => <First addToNavBar={this.addToNavBar} />} />
          <Route path="/second" render={() => <Second addToNavBar={this.addToNavBar} />}/>
          <Route path="/third" render={() => <Third addToNavBar={this.addToNavBar} />}/>
        </div>
    </Router>
    );
  }
}

export default App;
