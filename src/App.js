import React, { Component } from 'react';
import Stats from './components/Stats/Stats';
import Chart from './components/Chart/Chart';
import Location from './components/Location/Location';

class App extends Component {

  render() {
    return(
      <div>
        <Stats/>
        <Chart/>
        <Location/>
      </div>
    );
  };

};

export default App;
