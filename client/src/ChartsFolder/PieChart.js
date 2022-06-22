// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function PieChart(props) {
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
  if (props.thirdDiagramValues1.length === 0) {
    var data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  } else data = props.thirdDiagramValues1;
  return (
    <div>
      <Bar
        data={{
          labels: ekonomikuriMomsaxurebisSaxeebi,
          datasets: [
            {
              label: "გავლენა მთლიან ეკონომიკაზე",
              data: data,
              backgroundColor: [
                "#597FB6",
                "#B35751"
              ],
            },
          ],
        }}
        height={"700"}
        options={{
          indexAxis: "y",
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                font: {
                  size: 8,
                },
              },
            },
            x: {
              ticks: {
                font: {
                  size: 8,
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export default PieChart;
