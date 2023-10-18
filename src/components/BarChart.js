import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    const backgroundColors = data.values.map((value) => {
      if (value === 22) {
        return "blue";
      } else {
        return "rgb(205, 205, 206)";
      }
    });

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.months,
        datasets: [
          {
            label: "Monthly Data",
            data: data.values,
            backgroundColor: backgroundColors,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {},
          y: {
            display: false,
          },
        },
        plugins: {
          title: {
            display: false,
          },
          tooltip: {
            enabled: false,
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
