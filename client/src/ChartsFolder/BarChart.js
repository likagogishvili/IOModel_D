// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  const ekonomikuriMomsaxurebisSaxeebi = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
  ];
  return (
    <div>
      <Bar
        data={{
          labels: ekonomikuriMomsaxurebisSaxeebi,
          datasets: [
            {
              label: "მიმდინარე",

              data: props.firstValue,

              backgroundColor: ["#5a80b8"],
            },
            {
              label: "ახალი",
              data: props.secondValue,
              backgroundColor: ["#B25751"],
            },
          ],
        }}
        height={"500"}
        options={{
          indexAxis: "y",
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                font: {
                  size: 10,
                  family: "Ninomtavruli",
                },
              },
            },
            x: {
              ticks: {
                font: {
                  size: 10,
                  family: "Ninomtavruli",
                },
              },
            },
          },
          responsive: true,
  
        }}
      />
    </div>
  );
}

export default BarChart;
