import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    }

    fetchAPI();
  });

  const lineChart = (
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map((day) => day.date),
          datasets: [{
            data: dailyData.map((day) => day.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((day) => day.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }],
        }}
      />
    ) : null
  );

  return(
    <div className='container' id='line-chart'>
      {lineChart}
    </div>
  )
}

export default Chart;