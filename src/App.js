import React, { Component } from 'react';
import Stats from './components/Stats/Stats';
import Chart from './components/Chart/Chart';
import Location from './components/Location/Location';
import styles from './App.module.css';
import { fetchData } from './api/index'

class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country); 
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    return(
      <div className={styles.container}>
        <Stats data={this.state.data}/>
        <Location handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  };

};

export default App;
