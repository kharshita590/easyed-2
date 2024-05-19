import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import './sidebar2.css';
import sourceData from "../Components/data/revenuData.json"
const BarGraph=()=>{
    return (
      <> 
       <div>

       <div className="dataCard">
        <div className="top">
        <h1>Skills Report</h1>
        <div className="side">
        <button className="month">February</button>
        <button className="export">Export PDF</button>
        </div>
        </div>
       
       <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                    "rgba(148, 0, 211, 0.8)",
                    "rgba(255, 165, 0, 0.8)",
                    "rgba(128, 0, 128, 0.8)",
                    "rgba(0, 128, 0, 0.8)",
                    "rgba(135, 206, 235, 0.8)",
                    "rgba(128, 0, 128, 0.8)",
                    "rgba(144, 238, 144, 0.8)",
                    "rgba(255, 255, 0, 0.8)",
                    "rgba(255, 140, 0, 0.8)",
                    "rgba(0, 128, 0, 0.8)"
                ],
                borderRadius: 2,
                barThickness: 35,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
          

        />
        </div>
      </div>
    
      </> 
    )
}
export default BarGraph;