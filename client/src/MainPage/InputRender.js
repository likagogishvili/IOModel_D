import { useEffect } from "react";
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

  useEffect(
    () => {
      // procentit
      for (let i = 0; i < ar1.length; i++) {
        if (props.infoprecent[ar1[i]].length !== 0) {
          if (props.info[ar1[i]].length === 0) {
            props.axalisabolooMoxmareba[i] =
              props.axalisabolooMoxmareba[i] +
              (props.axalisabolooMoxmareba[i] * props.infoprecent[ar1[i]]) /
                100;
            props.setnewvalue(props.axalisabolooMoxmareba);
          } else {
            // console.log("can't update 1");
          }
        }
      }
      // ricxvit
      for (let i = 0; i < ar1.length; i++) {
        if (props.info[ar1[i]].length !== 0) {
          if (props.infoprecent[ar1[i]].length === 0) {
            props.axalisabolooMoxmareba[i] =
              props.axalisabolooMoxmareba[i] + props.info[ar1[i]] * 1;
            props.setnewvalue(props.axalisabolooMoxmareba);
          } else {
            // console.log("can't update 2");
          }
        }
      }
    },
    // eslint-disable-next-line
    [props.info, props.infoprecent]
  );

  function ClearData() {
    window.location.reload(false);
  }
  function changeInputValue(event) {
    for (let i = 0; i < ar1.length; i++) {
      if (props.infoprecent[ar1[i]].length !== 0) {
        if (
          event.target.id.toLowerCase() === Object.keys(props.infoprecent)[i]
        ) {
          event.target.value = (
            (props.old[i] * props.infoprecent[ar1[i]]) /
            100
          ).toFixed(2);
        }
      }
    }
  }
  function changeInputValueFromNumber(event) {
    for (let i = 0; i < ar1.length; i++) {
      if (props.info[ar1[i]].length !== 0) {
        if (event.target.id.toLowerCase() === Object.keys(props.info)[i]) {
          event.target.value = (
            (props.info[ar1[i]] / props.old[i]) *
            100
          ).toFixed(2);
        }
      }
    }
  }

  return (
    <div className="LeftInformation">
      <header className="inputHeader">
        <div className="firT">Nace Rev.2</div>
        <div className="secT">ეკონომიკური საქმიანობის სახეები</div>
        <div className="thirdT">საბოლოო მოხმარება</div>
        <div className="last2T">%ცვლილება საბოლოო მოხმარებაში</div>
        <div className="last2T">ნომინალური ცვლილება საბოლოო მოხმარებაში</div>
      </header>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">A</div>
        <div className="inputP">
          <p>სოფლის მეურნეობა</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[0] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="A"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, a: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="A"
          onChange={(e) => props.SetInfo({ ...props.info, a: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">B</div>
        <div className="inputP">
          <p>სამთომოპოვებითი მრეწველობა</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[1] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="B"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, b: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="B"
          onChange={(e) => props.SetInfo({ ...props.info, b: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">C</div>
        <div className="inputP">
          <p>დამამუშავებელი მრეწველობა</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[2] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="C"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, c: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="C"
          onChange={(e) => props.SetInfo({ ...props.info, c: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">D</div>
        <div className="inputP">
          <p>ელექტროენერგია</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[3] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="D"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, d: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="D"
          onChange={(e) => props.SetInfo({ ...props.info, d: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">E</div>
        <div className="inputP">
          <p>წყალმომარაგება და ნარჩენების მართვა</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[4] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="E"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, e: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="E"
          onChange={(e) => props.SetInfo({ ...props.info, e: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">F</div>
        <div className="inputP">
          <p>მშენებლობა</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[5] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="F"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, f: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="F"
          onChange={(e) => props.SetInfo({ ...props.info, f: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">G</div>
        <div className="inputP">
          <p>ვაჭრობა</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[6] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="G"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, g: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="G"
          onChange={(e) => props.SetInfo({ ...props.info, g: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">H</div>
        <div className="inputP">
          <p>ტრანსპორტი</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[7] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="H"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, h: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="H"
          onChange={(e) => props.SetInfo({ ...props.info, h: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">I</div>
        <div className="inputP">
          <p>სასტუმროები და რესტორნები</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[8] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="I"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, i: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="I"
          onChange={(e) => props.SetInfo({ ...props.info, i: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">J</div>
        <div className="inputP">
          <p>ინფორმაცია და კომუნიკაცია</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[9] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="J"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, j: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="J"
          onChange={(e) => props.SetInfo({ ...props.info, j: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">K</div>
        <div className="inputP">
          <p>საფინანსო და სადაზღვევო საქმიანობები</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[10] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="K"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, k: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="K"
          onChange={(e) => props.SetInfo({ ...props.info, k: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">L</div>
        <div className="inputP">
          <p>უძრავი ქონება</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[11] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="L"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, l: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="L"
          onChange={(e) => props.SetInfo({ ...props.info, l: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">M</div>
        <div className="inputP">
          <p>პროფესიული და სამეცნიერო საქმიანობები</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[12] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="M"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, m: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="M"
          onChange={(e) => props.SetInfo({ ...props.info, m: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">N</div>
        <div className="inputP">
          <p>ადმინისტრაციული საქმიანობები</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[13] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="N"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, n: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="N"
          onChange={(e) => props.SetInfo({ ...props.info, n: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">O</div>
        <div className="inputP">
          <p>სახელმწიფო მმართველობა და სოციალური უსაფრთხოება</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[14] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="O"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, o: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="O"
          onChange={(e) => props.SetInfo({ ...props.info, o: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">P</div>
        <div className="inputP">
          <p>განათლება</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[15] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="P"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, p: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="P"
          onChange={(e) => props.SetInfo({ ...props.info, p: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">Q</div>
        <div className="inputP">
          <p>ჯანდაცვა და სოციალური მომსახურებები</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[16] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="Q"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, q: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="Q"
          onChange={(e) => props.SetInfo({ ...props.info, q: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">R</div>
        <div className="inputP">
          <p>ხელოვნება, გართობა და დასვენება</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[17] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="R"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, r: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="R"
          onChange={(e) => props.SetInfo({ ...props.info, r: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldWhite">
        <div className="inputAlphabet">S</div>
        <div className="inputP">
          <p>სხვა სახის მომსახურება</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[18] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="S"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, s: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="S"
          onChange={(e) => props.SetInfo({ ...props.info, s: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <section className="inputFieldDark">
        <div className="inputAlphabet">T</div>
        <div className="inputP">
          <p>შინამეურნეობების საქმიანობები</p>
          <div className="inputSymbol">i</div>
        </div>
        <div className="sabolooMoxmareba">
          {(Math.round(props.data[19] * 10) / 10).toString()}
        </div>
        <input
          className="inputClasses"
          type={"number"}
          id="T"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, t: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValueFromNumber}
        />
        <input
          className="inputClasses"
          type={"number"}
          id="T"
          onChange={(e) => props.SetInfo({ ...props.info, t: e.target.value })}
          onWheel={() => document.activeElement.blur()}
          onClick={changeInputValue}
        />
      </section>

      <button onClick={ClearData}>გასუფთავება</button>
    </div>
  );
}
export default InputRender;
