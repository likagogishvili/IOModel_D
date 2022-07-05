import { useState } from "react";
import BarChart from "../ChartsFolder/BarChart";
import Sxvaoba from "../ChartsFolder/SxvaobaChart";
import "./BottomCharts.css";
import * as XLSX from "xlsx";

function BottomCharts(props) {
  const [gamoshvebaRender, SetGamoshvebaRender] = useState(true);
  const [damatebitiRender, SetDamatebitiRender] = useState(true);
  const [dasaqmebaRender, SetDasaqmebaRender] = useState(true);
  const [importiRender, SetImportiRender] = useState(true);
  const [kapitaliRender, SetKapitaliRender] = useState(true);
  const [shromaRender, SetShromaRender] = useState(true);

  function createArray(arr1, arr2) {
    if (!props.languageChange) {
      var newArr = [["მიმდინარე", "ახალი", "ნომინალური ცვლილება"]];
    } else {
      newArr = [["Current", "New", "Difference"]];
    }
    for (let i = 0; i < arr1.length; i++) {
      newArr.push([
        Math.round([arr1[i]] * 100) / 100,
        Math.round([arr2[i]] * 100) / 100,
        Math.round([arr2[i] - arr1[i]]),
      ]);
    }
    return newArr;
  }
  let firstExcelValues = createArray(
    props.damatebitiBCfirstValue,
    props.damatebitiBCsecondValue
  );
  let secondExcelValues = createArray(
    props.gamoshvebaBCfirstValue,
    props.gamoshvebaBCsecondValue
  );
  let thirdExcelValues = createArray(
    props.dasaqmebaSxvaobafirstValue,
    props.dasaqmebaSxvaobasecondValue
  );
  let fourthExcelValue = createArray(
    props.importiSxvaobafirstValue,
    props.importiSxvaobasecondValue
  );
  let fifthExcelValue = createArray(
    props.kapitaliSxvaobafirstValue,
    props.kapitaliSxvaobasecondValue
  );
  let sixExcelValue = createArray(
    props.shromaBCfirstValue,
    props.shromaBCsecondValue
  );

  function exportData(arr) {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.aoa_to_sheet(arr);
    XLSX.utils.book_append_sheet(wb, ws, "mySheet1");
    XLSX.writeFile(wb, "data.xls");
  }

  function downloadFirst() {
    exportData(firstExcelValues);
  }
  function downloadSecond() {
    exportData(secondExcelValues);
  }
  function downloadThird() {
    exportData(thirdExcelValues);
  }
  function downloadFourth() {
    exportData(fourthExcelValue);
  }
  function downloadFifth() {
    exportData(fifthExcelValue);
  }
  function downloadSix() {
    exportData(sixExcelValue);
  }
  return (
    <div>
      <div className="chartBottomDark">
        <div className="renderingWithArrow">
          <p>
            {!props.languageChange
              ? "მთლიანი შიდა პროდუქტი, მლნ ლარი"
              : "Value added, mil Gel"}
          </p>
          <button onClick={() => SetDamatebitiRender(!damatebitiRender)}>
            {damatebitiRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {damatebitiRender && (
          <div>
            <div className="chartGraphs">
              <div className="BarChartAll">
                <BarChart
                  firstValue={props.damatebitiBCfirstValue}
                  secondValue={props.damatebitiBCsecondValue}
                  languageChange={props.languageChange}
                />
              </div>
              <div className="BarChartSxvaoba">
                <Sxvaoba
                  firstValue={props.damatebitiSxvaobafirstValue}
                  secondValue={props.damatebitiSxvaobasecondValue}
                  languageChange={props.languageChange}
                />
              </div>
            </div>
            <button className="downloadBTN" onClick={downloadFirst}>
              {!props.languageChange ? "გადმოწერა" : "Download"}
            </button>
          </div>
        )}
      </div>
      <div className="chartBottomLight">
        <div className="renderingWithArrow">
          <p>
            {!props.languageChange ? "გამოშვება, მლნ ლარი" : "Output, mil Gel"}
          </p>
          <button onClick={() => SetGamoshvebaRender(!gamoshvebaRender)}>
            {gamoshvebaRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {gamoshvebaRender && (
          <div>
            <div className="chartGraphs">
              <div className="BarChartAll">
                <BarChart
                  firstValue={props.gamoshvebaBCfirstValue}
                  secondValue={props.gamoshvebaBCsecondValue}
                  languageChange={props.languageChange}
                />
              </div>
              <div className="BarChartSxvaoba">
                <Sxvaoba
                  firstValue={props.gamoshvebaSxvaobafirstValue}
                  secondValue={props.gamoshvebaSxvaobasecondValue}
                  languageChange={props.languageChange}
                />
              </div>
            </div>
            <button className="downloadBTN" onClick={downloadSecond}>
              {!props.languageChange ? "გადმოწერა" : "Download"}
            </button>
          </div>
        )}
      </div>

      <div className="chartBottomDark">
        <div className="renderingWithArrow">
          <p>
            {!props.languageChange
              ? "დასაქმება, ათასი კაცი"
              : "Employment, person"}
          </p>
          <button onClick={() => SetDasaqmebaRender(!dasaqmebaRender)}>
            {dasaqmebaRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {dasaqmebaRender && (
          <div>
            <div className="chartGraphs">
              <div className="BarChartAll">
                <BarChart
                  firstValue={props.dasaqmebaBCfirstValue}
                  secondValue={props.dasaqmebaBCsecondValue}
                  languageChange={props.languageChange}
                />
              </div>
              <div className="BarChartSxvaoba">
                <Sxvaoba
                  firstValue={props.dasaqmebaSxvaobafirstValue}
                  secondValue={props.dasaqmebaSxvaobasecondValue}
                  languageChange={props.languageChange}
                />
              </div>
            </div>
            <button className="downloadBTN" onClick={downloadThird}>
              {!props.languageChange ? "გადმოწერა" : "Download"}
            </button>
          </div>
        )}
      </div>

      <div className="chartBottomLight">
        <div className="renderingWithArrow">
          <p>
            {!props.languageChange ? "იმპორტი, მლნ ლარი" : "Import, mil Gel"}
          </p>
          <button onClick={() => SetImportiRender(!importiRender)}>
            {importiRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {importiRender && (
          <div>
            <div className="chartGraphs">
              <div className="BarChartAll">
                <BarChart
                  firstValue={props.importiBCfirstValue}
                  secondValue={props.importiBCsecondValue}
                  languageChange={props.languageChange}
                />
              </div>
              <div className="BarChartSxvaoba">
                <Sxvaoba
                  firstValue={props.importiSxvaobafirstValue}
                  secondValue={props.importiSxvaobasecondValue}
                  languageChange={props.languageChange}
                />
              </div>
            </div>
            <button className="downloadBTN" onClick={downloadFourth}>
              {!props.languageChange ? "გადმოწერა" : "Download"}
            </button>
          </div>
        )}
      </div>

      <div className="chartBottomDark">
        <div className="renderingWithArrow">
          <p>
            {!props.languageChange
              ? "ძირითადი კაპიტალის მთლიანი ფორმირება, მლნ ლარი"
              : "Gross capital formation, mil Gel"}
          </p>
          <button onClick={() => SetKapitaliRender(!kapitaliRender)}>
            {kapitaliRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {kapitaliRender && (
          <div>
            <div className="chartGraphs">
              <div className="BarChartAll">
                <BarChart
                  firstValue={props.kapitaliBCfirstValue}
                  secondValue={props.kapitaliBCsecondValue}
                  languageChange={props.languageChange}
                />
              </div>
              <div className="BarChartSxvaoba">
                <Sxvaoba
                  firstValue={props.kapitaliSxvaobafirstValue}
                  secondValue={props.kapitaliSxvaobasecondValue}
                  languageChange={props.languageChange}
                />
              </div>
            </div>
            <button className="downloadBTN" onClick={downloadFifth}>
              {!props.languageChange ? "გადმოწერა" : "Download"}
            </button>
          </div>
        )}
      </div>

      <div className="chartBottomLight">
        <div className="renderingWithArrow">
          <p>
            {!props.languageChange
              ? "შრომის ანაზღაურება, მლნ ლარი"
              : "Compensation of employees, mil Gel"}
          </p>
          <button onClick={() => SetShromaRender(!shromaRender)}>
            {shromaRender ? (
              <i className="arrow down"></i>
            ) : (
              <i className="arrow right"></i>
            )}
          </button>
        </div>
        {shromaRender && (
          <div>
            <div className="chartGraphs">
              <div className="BarChartAll">
                <BarChart
                  firstValue={props.shromaBCfirstValue}
                  secondValue={props.shromaBCsecondValue}
                  languageChange={props.languageChange}
                />
              </div>
              <div className="BarChartSxvaoba">
                <Sxvaoba
                  firstValue={props.shromaSxvaobafirstValue}
                  secondValue={props.shromaSxvaobasecondValue}
                  languageChange={props.languageChange}
                />
              </div>
            </div>
            <button className="downloadBTN" onClick={downloadSix}>
              {!props.languageChange ? "გადმოწერა" : "Download"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default BottomCharts;
