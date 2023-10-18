import React, { useEffect, useRef } from 'react';
import { Chart, BarController, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the previous chart if it exists
    }

    const ctx = chartRef.current.getContext('2d');

    const backgroundColors = data.values.map((value) => {
      // Assign specific colors based on your criteria
      if (value === 22) {
        return 'blue';
      } else {
        return 'rgb(205, 205, 206)';
      }
    });

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.months,
        datasets: [{
          label: 'Monthly Data',
          data: data.values,
          backgroundColor: backgroundColors, // Set the array of background colors
          borderColor: 'rgba(75, 192, 192, 1)', // Set a default border color
          borderWidth: 1, // Border width
        }],
      },
      options: {
        scales: {
          x: {
            // display: false, // Hide the x-axis
          },
          y: {
            display: false, // Hide the y-axis
          },
        },
        plugins: {
          title: {
            display: false, // Hide the title
          },
          tooltip: {
            enabled: false, // Disable tooltips
          },
        },
      },
    });
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default BarChart;
