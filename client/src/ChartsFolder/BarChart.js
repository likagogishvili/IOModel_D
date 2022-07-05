// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  if (!props.languageChange) {
    var ekonomikuriMomsaxurebisSaxeebi = [
      "A - სოფლის მეურნეობა",
      "B - სამთომოპოვებითი მრეწველობა",
      "C - დამამუშავებელი მრეწველობა",
      "D - ელექტროენერგია",
      "E - წყალმომარაგება და ნარჩენების მართვა",
      "F - მშენებლობა",
      "G - ვაჭრობა",
      "H - ტრანსპორტი",
      "I - სასტუმროები და რესტორნები",
      "J - ინფორმაცია და კომუნიკაცია",
      "K - საფინანსო და სადაზღვევო საქმიანობები",
      "L - უძრავი ქონება",
      "M - პროფესიული და სამეცნიერო საქმიანობები",
      "N - ადმინისტრაციული საქმიანობები",
      "O - სახელმწიფო მმართველობა",
      "P - განათლება",
      "Q - ჯანდაცვა და სოციალური მომსახურებები",
      "R - ხელოვნება, გართობა და დასვენება",
      "S - სხვა სახის მომსახურება",
      "T - შინამეურნეობების საქმიანობები",
    ];
  } else {
    ekonomikuriMomsaxurebisSaxeebi = [
      "A - Agriculture",
      "B - Mining and quarrying",
      "C - Manufacturing",
      "D - Electricity",
      "E - Water supply; sewerage",
      "F - Construction",
      "G - Trade",
      "H - Transport",
      "I - Hotels and restaurants",
      "J - Information and communication",
      "K - Financial and insurance activities",
      "L - Real estate activities",
      "M - Professional, scientific and technical activitie",
      "N - Administrative activities",
      "O - Public administration",
      "P - Education",
      "Q - Human health activities",
      "R - Arts, entertainment and recreation",
      "S - Other service activities",
      "T - Activities of households",
    ];
  }
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
      "სახელმწიფო მმართველობა და სოციალური უსაფრთხოება",
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
      "Electricity",
      "Water supply; sewerage",
      "Construction",
      "Trade",
      "Transport",
      "Hotels and restaurants",
      "Information and communication",
      "Financial and insurance activities",
      "Real estate activities",
      "Professional, scientific and technical activitie",
      "Administrative activities",
      "Public administration",
      "Education",
      "Human health activities",
      "Arts, entertainment and recreation",
      "Other service activities",
      "Activities of households",
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
              label: !props.languageChange ? "განახლებული" : "Updated",
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
