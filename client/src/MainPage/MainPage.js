import { useState } from "react";
import BarChart from "../ChartsFolder/BarChart";
import "../ChartsFolder/ChartStyles.css";
import Sxvaoba from "../ChartsFolder/SxvaobaChart";
import ContentHeader from "../ContentHeader/ContentHeader";
import InputRender from "./InputRender";
import "./mainPage.css";

function MainPage(props) {
  const [infoprecent, SetInfoPrecent] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
  });
  const [info, SetInfo] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
  });

  const [newval, setnewvalue] = useState([""]);

  const axalisabolooMoxmareba = [];

  props.mimdinareGirebuleba.map((item) =>
    axalisabolooMoxmareba.push(item.SabolooMoxmareba * 1)
  );

  function multiply(a, b) {
    var aNumRows = a.length,
      aNumCols = a[0].length,
      bNumCols = b[0].length,
      m = new Array(aNumRows);
    for (var r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols);
      for (var c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;
        for (var i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[c][i];
        }
      }
    }
    return m;
  }

  if (newval.length === 1) {
    var firstDiagramNewValues = multiply(
      [axalisabolooMoxmareba],
      props.axaliGamoshveba
    )[0];

    var secondDiagramValue = multiply(
      [axalisabolooMoxmareba],
      props.axaliDamatebiti
    )[0];
    var thirdDiagramValue = multiply(
      [axalisabolooMoxmareba],
      props.axaliDasaqmebis
    )[0];

    var fourthDiagramValue = multiply(
      [axalisabolooMoxmareba],
      props.axaliImporti
    )[0];

    var fifthDiagramValue = multiply(
      [axalisabolooMoxmareba],
      props.axaliKapitali
    )[0];
    var sixthDiagramValue = multiply(
      [axalisabolooMoxmareba],
      props.axaliShroma
    )[0];
  } else {
    firstDiagramNewValues = multiply([newval], props.axaliGamoshveba)[0];
    secondDiagramValue = multiply([newval], props.axaliDamatebiti)[0];
    thirdDiagramValue = multiply([newval], props.axaliDasaqmebis)[0];
    fourthDiagramValue = multiply([newval], props.axaliImporti)[0];
    fifthDiagramValue = multiply([newval], props.axaliKapitali)[0];
    sixthDiagramValue = multiply([newval], props.axaliShroma)[0];
  }

  return (
    <div>
      <ContentHeader />
      <InputRender
        axalisabolooMoxmareba={axalisabolooMoxmareba}
        setnewvalue={setnewvalue}
        newval={newval}
        SetInfo={SetInfo}
        info={info}
        SetInfoPrecent={SetInfoPrecent}
        infoprecent={infoprecent}
      />

      <div className="chartP">
        <p>გამოშვება</p>
        <div className="chartGraphs">
          <div className="BarChartAll">
            <BarChart
              firstValue={props.sabolooGamoshveba}
              secondValue={firstDiagramNewValues}
            />
          </div>
          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.sabolooGamoshveba}
              secondValue={firstDiagramNewValues}
            />
          </div>

          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.sabolooGamoshveba}
              secondValue={firstDiagramNewValues}
            />
          </div>
        </div>
      </div>

      <div className="chartP">
        <p>დამატებითი ღირებულების მულტიპლიკატორი</p>
        <div className="chartGraphs">
          <div className="BarChartAll">
            <BarChart
              firstValue={props.dzveliDamatebiti}
              secondValue={secondDiagramValue}
            />
          </div>
          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliDamatebiti}
              secondValue={secondDiagramValue}
            />
          </div>

          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliDamatebiti}
              secondValue={secondDiagramValue}
            />
          </div>
        </div>
      </div>

      <div className="chartP">
        <p>დასაქმება</p>
        <div className="chartGraphs">
          <div className="BarChartAll">
            <BarChart
              firstValue={props.dzveliDasaqmebis}
              secondValue={thirdDiagramValue}
            />
          </div>
          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliDasaqmebis}
              secondValue={thirdDiagramValue}
            />
          </div>

          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliDasaqmebis}
              secondValue={thirdDiagramValue}
            />
          </div>
        </div>
      </div>

      <div className="chartP">
        <p>იმპორტი</p>
        <div className="chartGraphs">
          <div className="BarChartAll">
            <BarChart
              firstValue={props.dzveliImporti}
              secondValue={fourthDiagramValue}
            />
          </div>
          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliImporti}
              secondValue={fourthDiagramValue}
            />
          </div>

          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliImporti}
              secondValue={fourthDiagramValue}
            />
          </div>
        </div>
      </div>

      <div className="chartP">
        <p>ძირითადი კაპიტალის მთლიანი ფორმირება</p>
        <div className="chartGraphs">
          <div className="BarChartAll">
            <BarChart
              firstValue={props.dzveliKapitali}
              secondValue={fifthDiagramValue}
            />
          </div>
          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliKapitali}
              secondValue={fifthDiagramValue}
            />
          </div>

          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliKapitali}
              secondValue={fifthDiagramValue}
            />
          </div>
        </div>
      </div>

      <div className="chartP">
        <p>შრომის ანაზღაურება</p>
        <div className="chartGraphs">
          <div className="BarChartAll">
            <BarChart
              firstValue={props.dzveliShroma}
              secondValue={sixthDiagramValue}
            />
          </div>
          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliShroma}
              secondValue={sixthDiagramValue}
            />
          </div>

          <div className="BarChartSxvaoba">
            <Sxvaoba
              firstValue={props.dzveliShroma}
              secondValue={sixthDiagramValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
