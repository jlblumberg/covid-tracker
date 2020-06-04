import React, { Component } from 'react';
import Stats from './components/Stats/Stats';
import Chart from './components/Chart/Chart';
import Location from './components/Location/Location';
import styles from './App.module.css';
import { fetchData } from './api/index'

class App extends Component {

  async componentDidMount() {
    const data = await fetchData();
    console.log(data)
  }

  render() {
    return(
      <div className={styles.container}>
        <Stats/>
        <Chart/>
        <Location/>
      </div>
    );
  };

};

export default App;
