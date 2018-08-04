import React, { Component } from 'react';
import Header from './components/HeaderComponent'
import NavBar from './components/NavBarComponent'
import Footer from './components/FooterComponent'
import Signup from './components/SignupComponent'
import Login from './components/LoginComponent'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path='/' component={Header}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/login' component={Login}/>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
