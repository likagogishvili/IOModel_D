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
