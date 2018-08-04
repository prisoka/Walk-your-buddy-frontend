import React, { Component } from 'react';
import Header from './components/headerComponent'
import Footer from './components/footerComponent'
import Signup from './components/SignupComponent'
import Login from './components/loginComponent'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
