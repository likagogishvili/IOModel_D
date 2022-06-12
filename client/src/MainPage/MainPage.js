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

  console.log(axalisabolooMoxmareba);

  //   const ar = [
  //     [1.22, 	 0.02, 	 0.15, 	 0.00, 	 0.01 ,	 0.02 ,	 0.01 ,	 0.01, 	 0.07, 	 0.00, 	 0.00 ,	 0.00 ,	 0.01, 	 0.01, 	 0.01, 	 0.01 ,	 0.02 	, 0.03, 	 0.01 ,	 0.00 ] ,
  //     [0.00, 	 1.01, 	 0.01, 	 0.00, 	 0.00 ,	 0.01 ,	 0.00 ,	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 ,	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 	, 0.00, 	 0.00 ,	 0.00 ] ,
  //     [0.05, 	 0.12, 	 1.17, 	 0.03, 	 0.10 ,	 0.17 ,	 0.04 ,	 0.09, 	 0.11, 	 0.03, 	 0.02 ,	 0.01 ,	 0.04, 	 0.05, 	 0.05, 	 0.02 ,	 0.11 	, 0.05, 	 0.07 ,	 0.00 ] ,
  //     [0.01, 	 0.04, 	 0.03, 	 1.10, 	 0.05 ,	 0.01 ,	 0.01 ,	 0.02, 	 0.03, 	 0.02, 	 0.01 ,	 0.01 ,	 0.01, 	 0.01, 	 0.02, 	 0.01 ,	 0.03 	, 0.02, 	 0.03 ,	 0.00 ] ,
  //     [0.00, 	 0.00, 	 0.00, 	 0.00, 	 1.01 ,	 0.00 ,	 0.00 ,	 0.00, 	 0.01, 	 0.00, 	 0.00 ,	 0.00 ,	 0.00, 	 0.00, 	 0.01, 	 0.00 ,	 0.00 	, 0.00, 	 0.01 ,	 0.00 ] ,
  //     [0.00, 	 0.01, 	 0.01, 	 0.02, 	 0.03 ,	 1.21 ,	 0.01 ,	 0.01, 	 0.02, 	 0.02, 	 0.01 ,	 0.01 ,	 0.02, 	 0.01, 	 0.01, 	 0.01 ,	 0.02 	, 0.02, 	 0.01 ,	 0.00 ] ,
  //     [0.05, 	 0.08, 	 0.11, 	 0.03, 	 0.06 ,	 0.10 ,	 1.04 ,	 0.07, 	 0.07, 	 0.02, 	 0.02 ,	 0.01 ,	 0.03, 	 0.04, 	 0.04, 	 0.01 ,	 0.07 	, 0.04, 	 0.04 ,	 0.00 ] ,
  //     [0.02, 	 0.04, 	 0.05, 	 0.02, 	 0.02 ,	 0.04 ,	 0.06 ,	 1.12, 	 0.03, 	 0.01, 	 0.02 ,	 0.01 ,	 0.02, 	 0.05, 	 0.02, 	 0.01 ,	 0.03 	, 0.03, 	 0.04 ,	 0.00 ] ,
  //     [0.00, 	 0.00, 	 0.01, 	 0.01, 	 0.00 ,	 0.01 ,	 0.01 ,	 0.02, 	 1.01, 	 0.01, 	 0.02 ,	 0.00 ,	 0.01, 	 0.03, 	 0.03, 	 0.02 ,	 0.02 	, 0.02, 	 0.05 ,	 0.00 ] ,
  //     [0.00, 	 0.01, 	 0.01, 	 0.04, 	 0.01 ,	 0.01 ,	 0.01 ,	 0.01, 	 0.01, 	 1.13, 	 0.05 ,	 0.01 ,	 0.03, 	 0.04, 	 0.01, 	 0.01 ,	 0.01 	, 0.03, 	 0.02 ,	 0.00 ] ,
  //     [0.03, 	 0.03, 	 0.03, 	 0.04, 	 0.03 ,	 0.04 ,	 0.03 ,	 0.03, 	 0.03, 	 0.03, 	 1.01 ,	 0.06 ,	 0.03, 	 0.04, 	 0.01, 	 0.01 ,	 0.03 	, 0.03, 	 0.03 ,	 0.00 ] ,
  //     [0.01, 	 0.01, 	 0.02, 	 0.01, 	 0.01 ,	 0.02 ,	 0.08 ,	 0.04, 	 0.07, 	 0.03, 	 0.07 ,	 1.03 ,	 0.03, 	 0.12, 	 0.04, 	 0.01 ,	 0.04 	, 0.04, 	 0.12 ,	 0.00 ] ,
  //     [0.01, 	 0.01, 	 0.02, 	 0.07, 	 0.01 ,	 0.02 ,	 0.02 ,	 0.02, 	 0.01, 	 0.03, 	 0.05 ,	 0.01 ,	 1.11, 	 0.01, 	 0.01, 	 0.01 ,	 0.01 	, 0.02, 	 0.04 ,	 0.00 ] ,
  //     [0.00, 	 0.00, 	 0.01, 	 0.01, 	 0.00 ,	 0.00 ,	 0.00 ,	 0.01, 	 0.01, 	 0.02, 	 0.01 ,	 0.00 ,	 0.01, 	 1.02, 	 0.01, 	 0.00 ,	 0.00 	, 0.02, 	 0.01 ,	 0.00 ] ,
  //     [0.00, 	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 ,	 0.00 ,	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 ,	 0.00, 	 0.01, 	 1.00, 	 0.00 ,	 0.00 	, 0.00, 	 0.00 ,	 0.00 ] ,
  //     [0.00, 	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 ,	 0.00 ,	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 ,	 0.00, 	 0.00, 	 0.00, 	 1.01 ,	 0.01 	, 0.00, 	 0.00 ,	 0.00 ] ,
  //     [0.00, 	 0.01, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 ,	 0.00 ,	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 ,	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 1.09 	, 0.00, 	 0.00 ,	 0.00 ] ,
  //     [0.00, 	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 ,	 0.00 ,	 0.00, 	 0.01, 	 0.00, 	 0.01 ,	 0.00 ,	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 	, 1.14, 	 0.00 ,	 0.00 ] ,
  //     [0.00, 	 0.00, 	 0.00, 	 0.01, 	 0.00 ,	 0.00 ,	 0.00 ,	 0.00, 	 0.00, 	 0.01, 	 0.01 ,	 0.00 ,	 0.00, 	 0.00, 	 0.00, 	 0.00 ,	 0.00 	, 0.00, 	 1.01 ,	 0.00 ] ,
  //     [0.00,  	 0.00,   0.00,   0.00,   0.00 ,	 0.00 ,  0.00 , 0.00 ,   0.00,   0.00,   0.00 ,  	 0.00, 0.00,   0.00,   0.00,  0.00  , 	 0.00 , 0.00,  0.00,1.00    ]
  //   ]

  // console.log(axalisabolooMoxmareba)
  // console.log(ar)

  console.log(infoprecent);
  console.log(newval);

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
          m[r][c] += a[r][i] * b[i][c];
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
  } else {
    firstDiagramNewValues = multiply([newval], props.axaliGamoshveba)[0];
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
      <div className="chartGraphs">
        <div className="BarChartAll">
          <BarChart
            firstValue={props.sabolooGamoshveba}
            secondValue={firstDiagramNewValues}
          />
        </div>
        <div className="BarChartAll">
          <Sxvaoba
            firstValue={props.sabolooGamoshveba}
            secondValue={firstDiagramNewValues}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
