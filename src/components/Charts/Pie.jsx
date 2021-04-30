import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

import { ChartContainer } from './styles';

const PieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() =>  countLanguages(), []);

  function countLanguages() {
    const repositories = JSON.parse(sessionStorage.getItem('userRepositories'));
    const filteredArray = repositories.map(item => item.language)

    let count = {};
    
    filteredArray.forEach(function(i) { count[i] = (count[i] || 0) + 1 });

    const keys = Object.keys(count).map((item, index) => (
      {
        name: item,
        value: Object.values(count)[index]
      }
    )).filter(item => item.name !== 'null');

    setData([...keys])
  }

  const dataResult = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: '# of Votes',
        data: data.map(item => item.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartContainer>
      <Pie data={dataResult} />
    </ChartContainer>
  )
}

export default PieChart;