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
  let firstValue = props.firstValue.map(function (each_element) {
    return Number(each_element.toFixed(1));
  });
  let secondValue = props.secondValue.map(function (each_element) {
    return Number(each_element.toFixed(1));
  });

  if (!props.languageChange) {
    var namesarray = [
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
  } else {
    namesarray = [
      "Agriculture",
      "Mining and quarrying",
      "Manufacturing",
      "Electricity, gas",
      "Water supply; sewerage, waste management",
      "Construction",
      "Trade",
      "Transportation and storage",
      "Accommodation and food service activities",
      "Information and communication",
      "Financial and insurance activities",
      "Real estate activities",
      "Professional, scientific and technical activitie",
      "Administrative and support service activities",
      "Public administration",
      "Education",
      "Human health",
      "Arts, entertainment and recreation",
      "Other service activities",
      "Activities of households as employers",
    ];
  }
  return (
    <div>
      <Bar
        data={{
          labels: ekonomikuriMomsaxurebisSaxeebi,
          datasets: [
            {
              label: !props.languageChange ? "მიმდინარე" : "Current",
              data: firstValue,
              backgroundColor: ["#5a80b8"],
            },
            {
              label: !props.languageChange ? "ახალი" : "New",
              data: secondValue,
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
                  size: 12,
                  family: "Ninomtavruli",
                },
              },
              grid: {
                display: false,
              },
            },
            x: {
              ticks: {
                font: {
                  size: 12,
                  family: "Ninomtavruli",
                },
              },
              grid: {
                display: false,
              },
            },
          },
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                title: function (context) {
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

export default BarChart;
