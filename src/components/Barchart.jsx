import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

function BarChartTitle(props) {
  return (
    <>
      <Bar
        data={{
          labels: props.title,
          datasets: [
            {
              label: props.label,
              data: props.data,
              backgroundColor: props.color,
              borderRadius: 5,
            },
          ],
        }}
        options={{
          tooltips: {
            mode: "index",
            intersect: false,
            display: false,
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Value",
                font: {
                  size: 14,
                },
              },
            },
            x: {
              display: false,
              title: {
                display: true,
                text: "Title",
                font: {
                  size: 14,
                },
              },
            },
          },
        }}
        plugins={{}}
      />
    </>
  );
}

export default BarChartTitle;
