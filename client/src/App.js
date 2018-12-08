import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
          <div className='container'>
            
            <h1> My blog</h1>

          </div>
      
      </div>
    );
  }
}

export default App;
