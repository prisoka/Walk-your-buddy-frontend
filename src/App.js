import React, { Component } from 'react';
import Header from './components/HeaderComponent'
import NavBar from './components/NavBarComponent'
import Footer from './components/FooterComponent'
import UserSignUp from './components/UserSignupComponent'
import WalkerSignUp from './components/WalkerSignupComponent'
import Login from './components/LoginComponent'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='*' component={NavBar}/>
            <Route exact path='/' component={Header}/>
            <Route path='/signup' component={UserSignUp}/>
            <Route path='/walkersignup' component={WalkerSignUp}/>
            <Route path='/login' component={Login}/>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
