import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/HeaderComponent'
import NavBar from './components/NavBarComponent'

import UserSignUp from './components/UserSignupComponent'
import UserIndex from './components/UserIndexComponent'
import AddDog from './components/AddDogComponent'
import RequestWalk from './components/RequestComponent'

import WalkerSignUp from './components/WalkerSignupComponent'
import WalkerIndex from './components/WalkerIndexComponent'

import Login from './components/LoginComponent'

import Footer from './components/FooterComponent'

class App extends Component {
  render() {
    const url = process.env.REACT_APP_API_URL
    console.log(process.env.REACT_APP_API_URL)
    console.log('URL>>>', url)

    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='*' component={ NavBar }/>
            <Route exact path='/' component={ Header }/>
            <Route path='/signup' component={ UserSignUp }/>
            <Route path='/walkersignup' component={ WalkerSignUp }/>
            <Route path='/login' component={ Login}/>
            <Route path='/user_index' component={ UserIndex }/>
            <Route path='/add_dog' component={ AddDog }/>
            <Route path='/request' component={ RequestWalk }/>
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
