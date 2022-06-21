import { useState } from "react";
import BarChart from "../ChartsFolder/BarChart";
import Sxvaoba from "../ChartsFolder/SxvaobaChart";
import "./BottomCharts.css";
function BottomCharts(props) {
  const [gamoshvebaRender, SetGamoshvebaRender] = useState(true);
  const [damatebitiRender, SetDamatebitiRender] = useState(true);
  const [dasaqmebaRender, SetDasaqmebaRender] = useState(true);
  const [importiRender, SetImportiRender] = useState(true);
  const [kapitaliRender, SetKapitaliRender] = useState(true);
  const [shromaRender, SetShromaRender] = useState(true);

  return (
    <div>
      <div className="chartBottomDark">
        <div className="renderingWithArrow">
          <p>გამოშვება</p>
          <button onClick={() => SetGamoshvebaRender(!gamoshvebaRender)}>
            {gamoshvebaRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {gamoshvebaRender && (
          <div className="chartGraphs">
            <div className="BarChartAll">
              <BarChart
                firstValue={props.gamoshvebaBCfirstValue}
                secondValue={props.gamoshvebaBCsecondValue}
              />
            </div>
            <div className="BarChartSxvaoba">
              <Sxvaoba
                firstValue={props.gamoshvebaSxvaobafirstValue}
                secondValue={props.gamoshvebaSxvaobasecondValue}
              />
            </div>
          </div>
        )}
      </div>

      <div className="chartBottomLight">
        <div className="renderingWithArrow">
          <p>დამატებითი ღირებულების მულტიპლიკატორი</p>
          <button onClick={() => SetDamatebitiRender(!damatebitiRender)}>
            {damatebitiRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {damatebitiRender && (
          <div className="chartGraphs">
            <div className="BarChartAll">
              <BarChart
                firstValue={props.damatebitiBCfirstValue}
                secondValue={props.damatebitiBCsecondValue}
              />
            </div>
            <div className="BarChartSxvaoba">
              <Sxvaoba
                firstValue={props.damatebitiSxvaobafirstValue}
                secondValue={props.damatebitiSxvaobasecondValue}
              />
            </div>
          </div>
        )}
      </div>

      <div className="chartBottomDark">
        <div className="renderingWithArrow">
          <p>დასაქმება</p>
          <button onClick={() => SetDasaqmebaRender(!dasaqmebaRender)}>
            {dasaqmebaRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {dasaqmebaRender && (
          <div className="chartGraphs">
            <div className="BarChartAll">
              <BarChart
                firstValue={props.dasaqmebaBCfirstValue}
                secondValue={props.dasaqmebaBCsecondValue}
              />
            </div>
            <div className="BarChartSxvaoba">
              <Sxvaoba
                firstValue={props.dasaqmebaSxvaobafirstValue}
                secondValue={props.dasaqmebaSxvaobasecondValue}
              />
            </div>
          </div>
        )}
      </div>

      <div className="chartBottomLight">
        <div className="renderingWithArrow">
          <p>იმპორტი</p>
          <button onClick={() => SetImportiRender(!importiRender)}>
            {importiRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {importiRender && (
          <div className="chartGraphs">
            <div className="BarChartAll">
              <BarChart
                firstValue={props.importiBCfirstValue}
                secondValue={props.importiBCsecondValue}
              />
            </div>
            <div className="BarChartSxvaoba">
              <Sxvaoba
                firstValue={props.importiSxvaobafirstValue}
                secondValue={props.importiSxvaobasecondValue}
              />
            </div>
          </div>
        )}
      </div>

      <div className="chartBottomDark">
        <div className="renderingWithArrow">
          <p>ძირითადი კაპიტალის მთლიანი ფორმირება</p>
          <button onClick={() => SetKapitaliRender(!kapitaliRender)}>
            {kapitaliRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {kapitaliRender && (
          <div className="chartGraphs">
            <div className="BarChartAll">
              <BarChart
                firstValue={props.kapitaliBCfirstValue}
                secondValue={props.kapitaliBCsecondValue}
              />
            </div>
            <div className="BarChartSxvaoba">
              <Sxvaoba
                firstValue={props.kapitaliSxvaobafirstValue}
                secondValue={props.kapitaliSxvaobasecondValue}
              />
            </div>
          </div>
        )}
      </div>

      <div className="chartBottomLight">
        <div className="renderingWithArrow">
          <p>შრომის ანაზღაურება</p>
          <button onClick={() => SetShromaRender(!shromaRender)}>
            {shromaRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {shromaRender && (
          <div className="chartGraphs">
            <div className="BarChartAll">
              <BarChart
                firstValue={props.shromaBCfirstValue}
                secondValue={props.shromaBCsecondValue}
              />
            </div>
            <div className="BarChartSxvaoba">
              <Sxvaoba
                firstValue={props.shromaSxvaobafirstValue}
                secondValue={props.shromaSxvaobasecondValue}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default BottomCharts;
