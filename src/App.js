import React, { Component } from 'react';
import Stats from './components/Stats/Stats';
import Chart from './components/Chart/Chart';
import Location from './components/Location/Location';
import styles from './App.module.css';
import { fetchData } from './api/index'

class App extends Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    return(
      <div className={styles.container}>
        <Stats data={this.state.data}/>
        <Location />
        <Chart />
      </div>
    );
  };

};

export default App;
