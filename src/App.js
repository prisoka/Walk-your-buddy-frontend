import React, { Component } from 'react';
import Header from './components/headerComponent'
import Footer from './components/footerComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
