import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  aspectRatio: 1.2,
  plugins: {
    legend: {
      position: 'right',
      display: false
    },
  },
};

function VerticalBar() {
  const userRepositories = JSON.parse(sessionStorage.getItem('userRepositories'));
  const MORE_STARREDS = userRepositories.sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0,5);

  const data = {
    labels: MORE_STARREDS?.map(item => item.name),
    datasets: [
      {
        label: 'Best project',
        data: MORE_STARREDS?.map(item => item.stargazers_count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar 
      data={data} 
      options={options} 
      style={{ position: 'relative', bottom: 20, right: 6 }} 
    />
  )
}

export default VerticalBar;
