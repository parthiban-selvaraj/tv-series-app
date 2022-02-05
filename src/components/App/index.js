import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/Series';
import 'whatwg-fetch';



// Class component
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>TV Series List</h1>
        </header>
        {/* sending cutom property to functional components */}
        <Intro message='Here you can find all of your most loved series' />
        {/* App is presentational component which receives API data from Series componet 
        which is container component */}
        <Series /> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </div>
    );
  }
}

export default App;
