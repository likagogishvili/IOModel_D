import HoverOni from "../HoverOnI/HoverOni";
import { useState } from "react";
function InputRender(props) {
  var ar1 = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
  ];
  var ar2 = [
    "a1",
    "b1",
    "c1",
    "d1",
    "e1",
    "f1",
    "g1",
    "h1",
    "i1",
    "j1",
    "k1",
    "l1",
    "m1",
    "n1",
    "o1",
    "p1",
    "q1",
    "r1",
    "s1",
    "t1",
  ];

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
  function roundNumber(num) {
    return parseFloat(num);
  }

  function changeInputValue(event) {
    if (event.target.value.length !== 0) {
      for (let z = 0; z < ar1.length; z++) {
        if (event.target.id === ar2[z]) {
          props.SetInfoPrecent({
            ...props.infoprecent,
            [ar1[z]]:
              (parseFloat(props.info[ar1[z]]) /
                parseFloat(props.axalisabolooMoxmareba[z])) *
              100,
          });
          props.axalisabolooMoxmareba[z] = roundNumber(
            parseFloat(props.axalisabolooMoxmareba[z]) +
              parseFloat(props.info[ar1[z]])
          );

          props.setnewvalue((values) =>
            values.map((value, i) =>
              i === z ? props.axalisabolooMoxmareba[z] : value
            )
          );
        }
        if (event.target.id === ar1[z]) {
          props.SetInfo({
            ...props.info,
            [ar1[z]]:
              (parseFloat(props.axalisabolooMoxmareba[z]) *
                parseFloat(props.infoprecent[ar1[z]])) /
              100,
          });
          props.axalisabolooMoxmareba[z] = roundNumber(
            parseFloat(props.axalisabolooMoxmareba[z]) +
              parseFloat(
                props.axalisabolooMoxmareba[z] *
                  parseFloat(props.infoprecent[ar1[z]])
              ) /
                100
          );

          props.setnewvalue((values) =>
            values.map((value, i) =>
              i === z ? props.axalisabolooMoxmareba[z] : value
            )
          );
        }
      }
    }
    if (event.target.value.length === 0) {
      for (let z = 0; z < ar1.length; z++) {
        if (event.target.id === ar1[z]) {
          props.SetInfoPrecent({
            ...props.infoprecent,
            [ar1[z]]: 0,
          });
          props.SetInfo({
            ...props.info,
            [ar1[z]]: 0,
          });
          props.setnewvalue((values) =>
            values.map((value, i) =>
              i === z ? props.axalisabolooMoxmareba[z] : value
            )
          );
        }
        if (event.target.id === ar2[z]) {
          props.SetInfo({
            ...props.info,
            [ar1[z]]: 0,
          });
          props.SetInfoPrecent({
            ...props.infoprecent,
            [ar1[z]]: 0,
          });
          props.setnewvalue((values) =>
            values.map((value, i) =>
              i === z ? props.axalisabolooMoxmareba[z] : value
            )
          );
        }
      }
    }
  }

  //symbolHoverElements
  const [symbol1, setSymbol1] = useState(false);
  const [symbol2, setSymbol2] = useState(false);
  const [symbol3, setSymbol3] = useState(false);
  const [symbol4, setSymbol4] = useState(false);
  const [symbol5, setSymbol5] = useState(false);
  const [symbol6, setSymbol6] = useState(false);
  const [symbol7, setSymbol7] = useState(false);
  const [symbol8, setSymbol8] = useState(false);
  const [symbol9, setSymbol9] = useState(false);
  const [symbol10, setSymbol10] = useState(false);
  const [symbol11, setSymbol11] = useState(false);
  const [symbol12, setSymbol12] = useState(false);
  const [symbol13, setSymbol13] = useState(false);
  const [symbol14, setSymbol14] = useState(false);
  const [symbol15, setSymbol15] = useState(false);
  const [symbol16, setSymbol16] = useState(false);
  const [symbol17, setSymbol17] = useState(false);
  const [symbol18, setSymbol18] = useState(false);
  const [symbol19, setSymbol19] = useState(false);
  const [symbol20, setSymbol20] = useState(false);

  return (
    <div className="LeftInformation">
      <HoverOni
        languageChange={props.languageChange}
        symbol1={symbol1}
        symbol2={symbol2}
        symbol3={symbol3}
        symbol4={symbol4}
        symbol5={symbol5}
        symbol6={symbol6}
        symbol7={symbol7}
        symbol8={symbol8}
        symbol9={symbol9}
        symbol10={symbol10}
        symbol11={symbol11}
        symbol12={symbol12}
        symbol13={symbol13}
        symbol14={symbol14}
        symbol15={symbol15}
        symbol16={symbol16}
        symbol17={symbol17}
        symbol18={symbol18}
        symbol19={symbol19}
        symbol20={symbol20}
      />
      {!props.languageChange ? (
        <header className="inputHeader">
          <div className="firT">Nace Rev.2</div>
          <div className="secT">ეკონომიკური საქმიანობის სახეები</div>
          <div className="thirdT">საბოლოო მოხმარება, მლნ ლარი</div>
          <div className="last2T">ცვლილება საბოლოო მოხმარებაში, %</div>
          <div className="last2T">ნომინალური ცვლილება საბოლოო მოხმარებაში</div>
        </header>
      ) : (
        <header className="inputHeader">
          <div className="firT">Nace Rev.2</div>
          <div className="secT">Nace Rev.2 code name</div>
          <div className="thirdT">Final consumption, mil Gel</div>
          <div className="last2T">Percentage Change in Final Demand</div>
          <div className="last2T">Nominal Change in Final Demand</div>
        </header>
      )}
      <section className="inputFieldWhite">
        <div className="inputAlphabet">A</div>

        <div className="inputP">
          <p>{namesarray[0]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol1(true)}
            onMouseLeave={() => setSymbol1(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[0] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="a"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, a: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.a || props.infoprecent.a === 0
              ? ""
              : parseFloat(props.infoprecent.a).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="a1"
          onChange={(e) => props.SetInfo({ ...props.info, a: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.a || props.info.a === 0
              ? ""
              : parseFloat(props.info.a).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">B</div>
        <div className="inputP">
          <p>{namesarray[1]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol2(true)}
            onMouseLeave={() => setSymbol2(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[1] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="b"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, b: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.b || props.infoprecent.b === 0
              ? ""
              : parseFloat(props.infoprecent.b).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="b1"
          onChange={(e) => props.SetInfo({ ...props.info, b: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.b || props.info.b === 0
              ? ""
              : parseFloat(props.info.b).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">C</div>
        <div className="inputP">
          <p>{namesarray[2]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol3(true)}
            onMouseLeave={() => setSymbol3(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[2] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="c"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, c: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.c || props.infoprecent.c === 0
              ? ""
              : parseFloat(props.infoprecent.c).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="c1"
          onChange={(e) => props.SetInfo({ ...props.info, c: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.c || props.info.c === 0
              ? ""
              : parseFloat(props.info.c).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">D</div>
        <div className="inputP">
          <p>{namesarray[3]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol4(true)}
            onMouseLeave={() => setSymbol4(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[3] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="d"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, d: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.d || props.infoprecent.d === 0
              ? ""
              : parseFloat(props.infoprecent.d).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="d1"
          onChange={(e) => props.SetInfo({ ...props.info, d: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.d || props.info.d === 0
              ? ""
              : parseFloat(props.info.d).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">E</div>
        <div className="inputP">
          <p>{namesarray[4]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol5(true)}
            onMouseLeave={() => setSymbol5(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[4] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="e"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, e: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.e || props.infoprecent.e === 0
              ? ""
              : parseFloat(props.infoprecent.e).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="e1"
          onChange={(e) => props.SetInfo({ ...props.info, e: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.e || props.info.e === 0
              ? ""
              : parseFloat(props.info.e).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">F</div>
        <div className="inputP">
          <p>{namesarray[5]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol6(true)}
            onMouseLeave={() => setSymbol6(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[5] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="f"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, f: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.f || props.infoprecent.f === 0
              ? ""
              : parseFloat(props.infoprecent.f).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="f1"
          onChange={(e) => props.SetInfo({ ...props.info, f: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.f || props.info.f === 0
              ? ""
              : parseFloat(props.info.f).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">G</div>
        <div className="inputP">
          <p>{namesarray[6]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol7(true)}
            onMouseLeave={() => setSymbol7(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[6] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="g"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, g: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.g || props.infoprecent.g === 0
              ? ""
              : parseFloat(props.infoprecent.g).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="g1"
          onChange={(e) => props.SetInfo({ ...props.info, g: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.g || props.info.g === 0
              ? ""
              : parseFloat(props.info.g).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">H</div>
        <div className="inputP">
          <p>{namesarray[7]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol8(true)}
            onMouseLeave={() => setSymbol8(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[7] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="h"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, h: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.h || props.infoprecent.h === 0
              ? ""
              : parseFloat(props.infoprecent.h).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="h1"
          onChange={(e) => props.SetInfo({ ...props.info, h: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.h || props.info.h === 0
              ? ""
              : parseFloat(props.info.h).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">I</div>
        <div className="inputP">
          <p>{namesarray[8]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol9(true)}
            onMouseLeave={() => setSymbol9(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[8] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="i"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, i: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.i || props.infoprecent.i === 0
              ? ""
              : parseFloat(props.infoprecent.i).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="i1"
          onChange={(e) => props.SetInfo({ ...props.info, i: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.i || props.info.i === 0
              ? ""
              : parseFloat(props.info.i).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">J</div>
        <div className="inputP">
          <p>{namesarray[9]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol10(true)}
            onMouseLeave={() => setSymbol10(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[9] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="j"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, j: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.j || props.infoprecent.j === 0
              ? ""
              : parseFloat(props.infoprecent.j).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="j1"
          onChange={(e) => props.SetInfo({ ...props.info, j: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.j || props.info.j === 0
              ? ""
              : parseFloat(props.info.j).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">K</div>
        <div className="inputP">
          <p>{namesarray[10]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol11(true)}
            onMouseLeave={() => setSymbol11(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[10] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="k"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, k: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.k || props.infoprecent.k === 0
              ? ""
              : parseFloat(props.infoprecent.k).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="k1"
          onChange={(e) => props.SetInfo({ ...props.info, k: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.k || props.info.k === 0
              ? ""
              : parseFloat(props.info.k).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">L</div>
        <div className="inputP">
          <p>{namesarray[11]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol12(true)}
            onMouseLeave={() => setSymbol12(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[11] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="l"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, l: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.l || props.infoprecent.l === 0
              ? ""
              : parseFloat(props.infoprecent.l).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="l1"
          onChange={(e) => props.SetInfo({ ...props.info, l: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.l || props.info.l === 0
              ? ""
              : parseFloat(props.info.l).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">M</div>
        <div className="inputP">
          <p>{namesarray[12]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol13(true)}
            onMouseLeave={() => setSymbol13(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[12] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="m"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, m: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.m || props.infoprecent.m === 0
              ? ""
              : parseFloat(props.infoprecent.m).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="m1"
          onChange={(e) => props.SetInfo({ ...props.info, m: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.m || props.info.m === 0
              ? ""
              : parseFloat(props.info.m).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">N</div>
        <div className="inputP">
          <p>{namesarray[13]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol14(true)}
            onMouseLeave={() => setSymbol14(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[13] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="n"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, n: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.n || props.infoprecent.n === 0
              ? ""
              : parseFloat(props.infoprecent.n).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="n1"
          onChange={(e) => props.SetInfo({ ...props.info, n: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.n || props.info.n === 0
              ? ""
              : parseFloat(props.info.n).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">O</div>
        <div className="inputP">
          <p>{namesarray[14]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol15(true)}
            onMouseLeave={() => setSymbol15(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[14] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="o"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, o: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.o || props.infoprecent.o === 0
              ? ""
              : parseFloat(props.infoprecent.o).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="o1"
          onChange={(e) => props.SetInfo({ ...props.info, o: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.o || props.info.o === 0
              ? ""
              : parseFloat(props.info.o).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">P</div>
        <div className="inputP">
          <p>{namesarray[15]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol16(true)}
            onMouseLeave={() => setSymbol16(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[15] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="p"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, p: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.p || props.infoprecent.p === 0
              ? ""
              : parseFloat(props.infoprecent.p).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="p1"
          onChange={(e) => props.SetInfo({ ...props.info, p: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.p || props.info.p === 0
              ? ""
              : parseFloat(props.info.p).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">Q</div>
        <div className="inputP">
          <p>{namesarray[16]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol17(true)}
            onMouseLeave={() => setSymbol17(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[16] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="q"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, q: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.q || props.infoprecent.q === 0
              ? ""
              : parseFloat(props.infoprecent.q).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="q1"
          onChange={(e) => props.SetInfo({ ...props.info, q: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.q || props.info.q === 0
              ? ""
              : parseFloat(props.info.q).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">R</div>
        <div className="inputP">
          <p>{namesarray[17]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol18(true)}
            onMouseLeave={() => setSymbol18(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[17] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="r"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, r: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.r || props.infoprecent.r === 0
              ? ""
              : parseFloat(props.infoprecent.r).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="r1"
          onChange={(e) => props.SetInfo({ ...props.info, r: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.r || props.info.r === 0
              ? ""
              : parseFloat(props.info.r).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">S</div>
        <div className="inputP">
          <p>{namesarray[18]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol19(true)}
            onMouseLeave={() => setSymbol19(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[18] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="s"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, s: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.s || props.infoprecent.s === 0
              ? ""
              : parseFloat(props.infoprecent.s).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="s1"
          onChange={(e) => props.SetInfo({ ...props.info, s: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.s || props.info.s === 0
              ? ""
              : parseFloat(props.info.s).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">T</div>
        <div className="inputP">
          <p>{namesarray[19]}</p>
          <div
            className="inputSymbol"
            onMouseEnter={() => setSymbol20(true)}
            onMouseLeave={() => setSymbol20(false)}
          >
            i
          </div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[19] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="t"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, t: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.t || props.infoprecent.t === 0
              ? ""
              : parseFloat(props.infoprecent.t).toFixed(2).replace(/\.00$/, "")
          }
        />
        <input
          className="inputClasses"
          type={"number"}
          id="t1"
          onChange={(e) => props.SetInfo({ ...props.info, t: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.info.t || props.info.t === 0
              ? ""
              : parseFloat(props.info.t).toFixed(1).replace(/\.0$/, "")
          }
        />
      </section>

      <button onClick={() => window.location.reload()}>
        {!props.languageChange ? "გასუფთავება" : "Clear"}
      </button>
    </div>
  );
}
export default InputRender;
