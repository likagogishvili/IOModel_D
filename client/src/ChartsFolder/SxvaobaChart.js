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
  const namesarray = [
    "სოფლის მეურნეობა",
    "სამთომოპოვებითი მრეწველობა",
    "დამამუშავებელი მრეწველობა",
    "ელექტროენერგია",
    "წყალმომარაგება და ნარჩენების მართვა",
    "მშენებლობა",
    "ვაჭრობა",
    "ტრანსპორტი",
    "სასტუმროები და რესტორნები",
    "ინფორმაცია და კომუნიკაცია",
    "საფინანსო და სადაზღვევო საქმიანობები",
    "უძრავი ქონება",
    "პროფესიული და სამეცნიერო საქმიანობები",
    "ადმინისტრაციული საქმიანობები",
    "სახელმწიფო მმართველობა",
    "განათლება",
    "ჯანდაცვა და სოციალური მომსახურებები",
    "ხელოვნება, გართობა და დასვენება",
    "სხვა სახის მომსახურება",
    "შინამეურნეობების საქმიანობები",
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
                  size: 12,
                  family: "Ninomtavruli",
                },
              },
            },
            x: {
              ticks: {
                font: {
                  size: 12,
                  family: "Ninomtavruli",
                },
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                title: function (context) {
                  console.log(context);
                  return (context[0].label = namesarray[context[0].dataIndex]);
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
