import React, { Component } from 'react';
import Header from './components/headerComponent'
import Footer from './components/footerComponent'
import Login from './components/loginComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
