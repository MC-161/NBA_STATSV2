import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DefensiveBarChart: React.FC = () => {
  // Example data
  const labels = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'];
  const turnoversData = [4, 3, 5, 2, 6];
  const reboundsData = [12, 10, 14, 9, 11];

  // Data configuration for the bar chart
  const data = {
    labels,
    datasets: [
      {
        label: 'Turnovers',
        data: turnoversData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Rebounds',
        data: reboundsData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options for customization
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Defensive Contributions (Turnovers & Rebounds)',
        font: {
          size: 12,
        },
        color: "white",
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      className="h-48 z-20 [border-image:linear-gradient(to_top_right,#FC5DFF,#E7FA0F)_30] border-2 border-solid border-transparent"
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default DefensiveBarChart;