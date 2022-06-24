// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function PieChart(props) {
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
              label: "გავლენა მთლიან ეკონომიკაზე",
              data: props.thirdDiagramValues1,
              backgroundColor: ["#597FB6"],
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
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                title: function (context) {
                  console.log(context);
                  return (context[0].label = namesarray[context[0].dataIndex]);
                },
              },
            },
            legend: {
              labels: {
                font: {
                  size: 14,
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
