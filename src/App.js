import React, { Component } from 'react';
import Header from './components/headerComponent'
import Footer from './components/footerComponent'
import Signup from './components/SignupComponent'
import Login from './components/loginComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Signup />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
