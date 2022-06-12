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

  var x = props.secondValue.map(function (item, index) {
    return item - props.firstValue[index];
  });
  console.log(x);

  return (
    <div>
      <Bar
        data={{
          labels: ekonomikuriMomsaxurebisSaxeebi,
          datasets: [
            {
              label: "სხვაობა",
              data: [
                // props.sabolooMoxmareba[0],
                // props.sabolooMoxmareba[1],
                // props.sabolooMoxmareba[2],
                // props.sabolooMoxmareba[3],
                // props.sabolooMoxmareba[4],
                // props.sabolooMoxmareba[5],
                // props.sabolooMoxmareba[6],
                // props.sabolooMoxmareba[7],
                // props.sabolooMoxmareba[8],
                // props.sabolooMoxmareba[9],
                // props.sabolooMoxmareba[10],
                // props.sabolooMoxmareba[11],
                // props.sabolooMoxmareba[12],
                // props.sabolooMoxmareba[13],
                // props.sabolooMoxmareba[14],
                // props.sabolooMoxmareba[15],
                // props.sabolooMoxmareba[16],
                // props.sabolooMoxmareba[17],
                // props.sabolooMoxmareba[18],
                // props.sabolooMoxmareba[19],
              ],
              backgroundColor: ["#5a80b8"],
            },
          ],
        }}
        height={"400"}
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

export default Sxvaoba;
