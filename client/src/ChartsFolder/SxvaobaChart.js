// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Sxvaoba(props) {
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
  let sxvaoba = [];
  for (let i = 0; i < props.secondValue.length; i++) {
    sxvaoba.push(props.secondValue[i] - props.firstValue[i]);
  }
  return (
    <div>
      <Bar
        data={{
          labels: ekonomikuriMomsaxurebisSaxeebi,
          datasets: [
            {
              label: "სხვაობა",
              data: sxvaoba,
              backgroundColor: ["#5a80b8"],
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
                  size: 8,
                  family: "Ninomtavruli",
                },
              },
            },
            x: {
              ticks: {
                font: {
                  size: 8,
                  family: "Ninomtavruli",
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Sxvaoba;
