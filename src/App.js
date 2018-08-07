import React, { Component } from 'react';
import Header from './components/HeaderComponent'
import NavBar from './components/NavBarComponent'

import UserSignUp from './components/UserSignupComponent'
import UserIndex from './components/UserIndexComponent'
import AddDog from './components/AddDogComponent'

import WalkerSignUp from './components/WalkerSignupComponent'
import WalkerIndex from './components/WalkerIndexComponent'
import DogCard from './components/DogCardComponent'

import Login from './components/LoginComponent'

import Footer from './components/FooterComponent'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='*' component={ NavBar }/>
            <Route exact path='/' component={ Header }/>
            <Route path='/add_dog' component={ AddDog }/>
            <Route path='/signup' component={ UserSignUp }/>
            <Route path='/walkersignup' component={ WalkerSignUp }/>
            <Route path='/login' component={ Login}/>
            <Route path='/user_index' component={ UserIndex }/>
            <Route path='/walker_index' component={ WalkerIndex }
            />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
