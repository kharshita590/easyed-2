import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import './sidebar2.css';
import { Progress } from '@chakra-ui/react'
import revenueData from "../Components/data/sourceData.json";

const LineChart = () => {
  return (
    <>
    <div className="card">
      <div className="lineCard">
        <h1>Trending Skills</h1>
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#8968CD",
                borderColor: "#8968CD",
              },
              {
                label: "",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#E6E6FA",
                borderColor: "#E6E6FA",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                display: false,
                text: "Trending skills",
              },
            },
            scales: {
              y: {
                ticks: {
                  display: false, 
                },
                grid: {
                  display: false, 
                },
              },
            },
          }}
        />
      </div>
      <div className="progress mt-[5.5rem] ml-[3rem]">
        <h1>Trending Skills</h1>
        <div className="mt-[1rem]" >
      <p className="dsa mb-2">Data Structures and Algorithms</p>
      <Progress value={67} size="xs" colorScheme="pink" className="mb-4" />

      <p className="android mb-2">Android Development</p>
      <Progress value={20} size="xs" colorScheme="orange" className="mb-4" />

      <p className="web mb-2">Web Development</p>
      <Progress value={70} size="xs" colorScheme="green" className="mb-4" />

      <p className="ui mb-2">UI/UX Designing</p>
      <Progress value={10} size="xs" colorScheme="pink" className="mb-4" />

      <p className="block mb-2">Blockchain Development</p>
      <Progress value={50} size="xs" colorScheme="blue" className="mb-4" />
    </div>
      </div>
      </div>
    </>
  );
};

export default LineChart;
