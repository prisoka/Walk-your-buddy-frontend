import React, { Component } from 'react';
import Header from './components/headerComponent'
import Footer from './components/footerComponent'
import CreateUser from './components/createUserComponent'
import CreateWalker from './components/createWalkerComponent'
import Login from './components/loginComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CreateUser />
        <CreateWalker />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
