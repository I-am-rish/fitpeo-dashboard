import React from "react";
import { Doughnut } from "react-chartjs-2";

const CircleChart = () => {
  const data = {
    labels: ["Purple", "Blue", "Empty"],
    datasets: [
      {
        data: [25, 40, 35],
        backgroundColor: ["purple", "blue", "rgb(205, 205, 206)"],
      },
    ],
  };

  const options = {
    cutout: "65%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, plugins) {
      const { ctx } = chart;

      ctx.save();
      ctx.font = "bolder 12px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `65% Total New Customers`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </div>
  );
};

export default CircleChart;
