import { useState } from "react";
import BarChart from "../ChartsFolder/BarChart";
import "../ChartsFolder/ChartStyles.css";
import PieChart from "../ChartsFolder/PieChart";
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



  //transforming array
  const transposedOSArray = props.axaliMtlianiMultiplikatorebi[0].map(
    (_, colIndex) =>
      props.axaliMtlianiMultiplikatorebi.map((row) => row[colIndex])
  );

  //mesame grafikebis shqmna
  // first
  let df1 = [];
  let df2 = [];
  let thirdDiagramValues1 = [];

  for (let i = 0; i < transposedOSArray.length; i++) {
    if (newval.length !== 1) {
      df1.push(transposedOSArray[i][0] * axalisabolooMoxmareba[i]);
      df2.push(transposedOSArray[i][0] * newval[i]);
    }
  }
  for (let i = 0; i < df1.length; i++) {
    thirdDiagramValues1.push(df2[i] - df1[i]);
  }

  // second
  let ds1 = [];
  let ds2 = [];
  let thirdDiagramValues2 = [];

  for (let i = 0; i < transposedOSArray.length; i++) {
    if (newval.length !== 1) {
      ds1.push(transposedOSArray[i][1] * axalisabolooMoxmareba[i]);
      ds2.push(transposedOSArray[i][1] * newval[i]);
    }
  }
  for (let i = 0; i < ds1.length; i++) {
    thirdDiagramValues2.push(ds2[i] - ds1[i]);
  }

  // third
  let dt1 = [];
  let dt2 = [];
  let thirdDiagramValues3 = [];

  for (let i = 0; i < transposedOSArray.length; i++) {
    if (newval.length !== 1) {
      dt1.push(transposedOSArray[i][2] * axalisabolooMoxmareba[i]);
      dt2.push(transposedOSArray[i][2] * newval[i]);
    }
  }
  for (let i = 0; i < dt1.length; i++) {
    thirdDiagramValues3.push(dt2[i] - dt1[i]);
  }

  // forth
  let dfo1 = [];
  let dfo2 = [];
  let thirdDiagramValues4 = [];
  for (let i = 0; i < transposedOSArray.length; i++) {
    if (newval.length !== 1) {
      dfo1.push(transposedOSArray[i][3] * axalisabolooMoxmareba[i]);
      dfo2.push(transposedOSArray[i][3] * newval[i]);
    }
  }
  for (let i = 0; i < df1.length; i++) {
    thirdDiagramValues4.push(dfo2[i] - dfo1[i]);
  }

  // fifth
  let dfif1 = [];
  let dfif2 = [];
  let thirdDiagramValues5 = [];
  for (let i = 0; i < transposedOSArray.length; i++) {
    if (newval.length !== 1) {
      dfif1.push(transposedOSArray[i][4] * axalisabolooMoxmareba[i]);
      dfif2.push(transposedOSArray[i][4] * newval[i]);
    }
  }
  for (let i = 0; i < dfif1.length; i++) {
    thirdDiagramValues5.push(dfif2[i] - dfif1[i]);
  }

  // six
  let dsix1 = [];
  let dsix2 = [];
  let thirdDiagramValues6 = [];
  for (let i = 0; i < transposedOSArray.length; i++) {
    if (newval.length !== 1) {
      dsix1.push(transposedOSArray[i][5] * axalisabolooMoxmareba[i]);
      dsix2.push(transposedOSArray[i][5] * newval[i]);
    }
  }
  for (let i = 0; i < dsix1.length; i++) {
    thirdDiagramValues6.push(dsix2[i] - dsix1[i]);
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
            <PieChart thirdDiagramValues1={thirdDiagramValues1} />
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
            <PieChart thirdDiagramValues1={thirdDiagramValues2} />
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
            <PieChart thirdDiagramValues1={thirdDiagramValues3} />
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
            <PieChart thirdDiagramValues1={thirdDiagramValues4} />
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
            <PieChart thirdDiagramValues1={thirdDiagramValues5} />
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
            <PieChart thirdDiagramValues1={thirdDiagramValues6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
