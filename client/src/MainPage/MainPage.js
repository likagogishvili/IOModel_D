import { useState } from "react";
import BarChart from "../ChartsFolder/BarChart";
import "../ChartsFolder/ChartStyles.css";
import Sxvaoba from "../ChartsFolder/SxvaobaChart";
import ContentHeader from "../ContentHeader/ContentHeader";
import "./mainPage.css";
function MainPage(props) {
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

  function setData(e) {
    e.preventDefault();

    if (info.f.length === 0) {
      axalisabolooMoxmareba[5] =
        axalisabolooMoxmareba[5] + (axalisabolooMoxmareba[5] * 10) / 100;
      setnewvalue(axalisabolooMoxmareba);
    }
    if (info.l.length === 0) {
      axalisabolooMoxmareba[11] =
        axalisabolooMoxmareba[11] + (axalisabolooMoxmareba[11] * 10) / 100;
      setnewvalue(axalisabolooMoxmareba);
    }
    if (info.q.length === 0) {
      axalisabolooMoxmareba[16] =
        axalisabolooMoxmareba[16] + (axalisabolooMoxmareba[16] * 10) / 100;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.a.length !== 0) {
      axalisabolooMoxmareba[0] = axalisabolooMoxmareba[0] + info.a * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.b.length !== 0) {
      axalisabolooMoxmareba[1] = axalisabolooMoxmareba[1] + info.b * 1;
      setnewvalue(axalisabolooMoxmareba);
    }
    if (info.c.length !== 0) {
      axalisabolooMoxmareba[2] = axalisabolooMoxmareba[2] + info.c * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.d.length !== 0) {
      axalisabolooMoxmareba[3] = axalisabolooMoxmareba[3] + info.d * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.e.length !== 0) {
      axalisabolooMoxmareba[4] = axalisabolooMoxmareba[4] + info.e * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.f.length !== 0) {
      axalisabolooMoxmareba[5] = axalisabolooMoxmareba[5] + info.f * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.g.length !== 0) {
      axalisabolooMoxmareba[6] = axalisabolooMoxmareba[6] + info.g * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.h.length !== 0) {
      axalisabolooMoxmareba[7] = axalisabolooMoxmareba[7] + info.h * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.i.length !== 0) {
      axalisabolooMoxmareba[8] = axalisabolooMoxmareba[8] + info.i * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.j.length !== 0) {
      axalisabolooMoxmareba[9] = axalisabolooMoxmareba[9] + info.j * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.k.length !== 0) {
      axalisabolooMoxmareba[10] = axalisabolooMoxmareba[10] + info.k * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.l.length !== 0) {
      axalisabolooMoxmareba[11] = axalisabolooMoxmareba[11] + info.l * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.m.length !== 0) {
      axalisabolooMoxmareba[12] = axalisabolooMoxmareba[12] + info.m * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.n.length !== 0) {
      axalisabolooMoxmareba[13] = axalisabolooMoxmareba[13] + info.n * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.o.length !== 0) {
      axalisabolooMoxmareba[14] = axalisabolooMoxmareba[14] + info.o * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.p.length !== 0) {
      axalisabolooMoxmareba[15] = axalisabolooMoxmareba[15] + info.p * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.q.length !== 0) {
      axalisabolooMoxmareba[16] = axalisabolooMoxmareba[16] + info.q * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.r.length !== 0) {
      axalisabolooMoxmareba[17] = axalisabolooMoxmareba[17] + info.r * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.s.length !== 0) {
      axalisabolooMoxmareba[18] = axalisabolooMoxmareba[18] + info.s * 1;
      setnewvalue(axalisabolooMoxmareba);
    }

    if (info.t.length !== 0) {
      axalisabolooMoxmareba[19] = axalisabolooMoxmareba[19] + info.t * 1;
      setnewvalue(axalisabolooMoxmareba);
    }
  }

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
      <div className="inputContainerPerent">
        <form className="inputContainer">
          <input
            type={"number"}
            id="A"
            placeholder="A"
            onChange={(e) => SetInfo({ ...info, a: e.target.value })}
          />
          <input
            type={"number"}
            id="B"
            placeholder="B"
            onChange={(e) => SetInfo({ ...info, b: e.target.value })}
          />
          <input
            type={"number"}
            id="C"
            placeholder="C"
            onChange={(e) => SetInfo({ ...info, c: e.target.value })}
          />
          <input
            type={"number"}
            id="D"
            placeholder="D"
            onChange={(e) => SetInfo({ ...info, d: e.target.value })}
          />
          <input
            type={"number"}
            id="E"
            placeholder="E"
            onChange={(e) => SetInfo({ ...info, e: e.target.value })}
          />
          <input
            type={"number"}
            id="F"
            placeholder="F"
            onChange={(e) => SetInfo({ ...info, f: e.target.value })}
          />
          <input
            type={"number"}
            id="G"
            placeholder="G"
            onChange={(e) => SetInfo({ ...info, g: e.target.value })}
          />
          <input
            type={"number"}
            id="H"
            placeholder="H"
            onChange={(e) => SetInfo({ ...info, h: e.target.value })}
          />
          <input
            type={"number"}
            id="I"
            placeholder="I"
            onChange={(e) => SetInfo({ ...info, i: e.target.value })}
          />
          <input
            type={"number"}
            id="J"
            placeholder="J"
            onChange={(e) => SetInfo({ ...info, j: e.target.value })}
          />
          <input
            type={"number"}
            id="K"
            placeholder="K"
            onChange={(e) => SetInfo({ ...info, k: e.target.value })}
          />
          <input
            type={"number"}
            id="L"
            placeholder="L"
            onChange={(e) => SetInfo({ ...info, l: e.target.value })}
          />
          <input
            type={"number"}
            id="M"
            placeholder="M"
            onChange={(e) => SetInfo({ ...info, m: e.target.value })}
          />
          <input
            type={"number"}
            id="N"
            placeholder="N"
            onChange={(e) => SetInfo({ ...info, n: e.target.value })}
          />
          <input
            type={"number"}
            id="O"
            placeholder="O"
            onChange={(e) => SetInfo({ ...info, o: e.target.value })}
          />
          <input
            type={"number"}
            id="P"
            placeholder="P"
            onChange={(e) => SetInfo({ ...info, p: e.target.value })}
          />
          <input
            type={"number"}
            id="Q"
            placeholder="Q"
            onChange={(e) => SetInfo({ ...info, q: e.target.value })}
          />
          <input
            type={"number"}
            id="R"
            placeholder="R"
            onChange={(e) => SetInfo({ ...info, r: e.target.value })}
          />
          <input
            type={"number"}
            id="S"
            placeholder="S"
            onChange={(e) => SetInfo({ ...info, s: e.target.value })}
          />
          <input
            type={"number"}
            id="T"
            placeholder="T"
            onChange={(e) => SetInfo({ ...info, t: e.target.value })}
          />
        </form>
        <form className="inputConteinetBTN">
          <button className="inpButton" onClick={setData}>
            გამოთვლა
          </button>
        </form>
      </div>
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
