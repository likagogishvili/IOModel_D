// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  const ekonomikuriMomsaxurebisSaxeebi = [
    "სოფლის მეურნეობა  A",
    "სამთომოპოვებითი მრეწველობა B",
    "დამამუშავებელი მრეწველობა C",
    "ელექტროენერგიის, აირის მიწოდება  D",
    "წყალმომარაგება; კანალიზაცია, ნარჩენების მართვა  E",
    "მშენებლობა  F",
    "ვაჭრობა  G",
    "ტრანსპორტი და დასაწყობება  H",
    "განთავსების საშუალებებით უზრუნველყოფია.  I",
    "ინფორმაცია და კომუნიკაცია  J",
    "საფინანსო და სადაზღვევო საქმიანობები  K",
    "უძრავ ქონებასთან დაკავშირებული საქმიანობები  L",
    "პროფესიული, სამეცნიერო და ტექნიკური საქმიანობები  M",
    "ადმინისტრაციული და დამხმარე მომსახურების საქმიანობები. N",
    "სახელმწიფო მმართველობა. O",
    "განათლება  P",
    "ჯანდაცვა  Q",
    "ხელოვნება, გართობა და დასვენება  R",
    "სხვა სახის მომსახურება  S",
    "შინამეურნეობების, როგორც დამქირავებლის, საქმიანობები  T",
  ];
  return (
    <div>
      <Bar
        data={{
          labels: ekonomikuriMomsaxurebisSaxeebi,
          datasets: [
            {
              label: "მიმდინარე",
              data: [
                props.firstValue[0],
                props.firstValue[1],
                props.firstValue[2],
                props.firstValue[3],
                props.firstValue[4],
                props.firstValue[5],
                props.firstValue[6],
                props.firstValue[7],
                props.firstValue[8],
                props.firstValue[9],
                props.firstValue[10],
                props.firstValue[11],
                props.firstValue[12],
                props.firstValue[13],
                props.firstValue[14],
                props.firstValue[15],
                props.firstValue[16],
                props.firstValue[17],
                props.firstValue[18],
                props.firstValue[19],
              ],
              backgroundColor: ["#5a80b8"],
            },
            {
              label: "ახალი",
              data: [
                props.secondValue[0],
                props.secondValue[1],
                props.secondValue[2],
                props.secondValue[3],
                props.secondValue[4],
                props.secondValue[5],
                props.secondValue[6],
                props.secondValue[7],
                props.secondValue[8],
                props.secondValue[9],
                props.secondValue[10],
                props.secondValue[11],
                props.secondValue[12],
                props.secondValue[13],
                props.secondValue[14],
                props.secondValue[15],
                props.secondValue[16],
                props.secondValue[17],
                props.secondValue[18],
                props.secondValue[19],
              ],
              backgroundColor: ["#B25751"],
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

export default BarChart;
