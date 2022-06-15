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
  return (
    <div>
      <Pie
        data={{
          labels: ekonomikuriMomsaxurebisSaxeebi,
          datasets: [
            {
              data: props.thirdDiagramValues1,
              backgroundColor: [
                "#37B067",
                "#6296BC",
                "#EDB40D",
                "#7FD7C1",
                "#9F8CAE",
                "#366C72",
                "#BCC7EE",
                "#DAF7A6",
                "#FFC300",
                "#FF5733",
                "#C70039",
                "#900C3F",
                "#581845",
                "#34495E",
                "#839192",
                "#F39C12",
                "#5DADE2",
                "#17A589",
                "#EBDEF0",
                "#AED6F1"
              ],
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
