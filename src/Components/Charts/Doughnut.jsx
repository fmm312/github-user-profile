import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { ChartContainer } from './styles';

function DoughnutChart() {
  const repositories = JSON.parse(sessionStorage.getItem('userRepositories'));
  const MORE_STARREDS = repositories.sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0,3).filter(item => item.stargazers_count !== 0);

  const data = {
    labels: MORE_STARREDS?.map(item => item.language),
    datasets: [
      {
        data: MORE_STARREDS?.map(item => item.stargazers_count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartContainer>
    <Doughnut data={data} />
    </ChartContainer>
  )
}

export default DoughnutChart;