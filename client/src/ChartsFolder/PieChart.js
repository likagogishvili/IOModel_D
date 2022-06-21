// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

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
      <Pie
        data={{
          labels: ekonomikuriMomsaxurebisSaxeebi,
          datasets: [
            {
              label: "გავლენა მთლიან ეკონომიკაზე",
              data: data,
              backgroundColor: [
                "#003f5c",
                "#2f4b7c",
                "#665191",
                "#a05195",
                "#d45087",
                "#f95d6a",
                "#ff7c43",
                "#ffa600",
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
