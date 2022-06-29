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

  function ClearData() {
    window.location.reload(false);
  }

  function roundNumber(num) {
    return Math.round((parseFloat(num) + Number.EPSILON) * 10) / 10;
  }

  function changeInputValue(event) {
    for (let z = 0; z < ar1.length; z++) {
      if (event.target.value) {
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
          id="a"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, a: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.a || props.infoprecent.a === 0
              ? ""
              : parseFloat(props.infoprecent.a).toFixed()
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
              : parseFloat(props.info.a).toFixed()
          }
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
          id="b"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, b: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.b || props.infoprecent.b === 0
              ? ""
              : parseFloat(props.infoprecent.b).toFixed()
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
              : parseFloat(props.info.b).toFixed()
          }
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
          id="c"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, c: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.c || props.infoprecent.c === 0
              ? ""
              : parseFloat(props.infoprecent.c).toFixed()
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
              : parseFloat(props.info.c).toFixed()
          }
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
          id="d"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, d: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.d || props.infoprecent.d === 0
              ? ""
              : parseFloat(props.infoprecent.d).toFixed()
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
              : parseFloat(props.info.d).toFixed()
          }
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
          id="e"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, e: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.e || props.infoprecent.e === 0
              ? ""
              : parseFloat(props.infoprecent.e).toFixed()
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
              : parseFloat(props.info.e).toFixed()
          }
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
          id="f"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, f: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.f || props.infoprecent.f === 0
              ? ""
              : parseFloat(props.infoprecent.f).toFixed()
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
              : parseFloat(props.info.f).toFixed()
          }
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
          id="g"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, g: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.g || props.infoprecent.g === 0
              ? ""
              : parseFloat(props.infoprecent.g).toFixed()
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
              : parseFloat(props.info.g).toFixed()
          }
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
          id="h"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, h: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.h || props.infoprecent.h === 0
              ? ""
              : parseFloat(props.infoprecent.h).toFixed()
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
              : parseFloat(props.info.h).toFixed()
          }
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
          id="i"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, i: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.i || props.infoprecent.i === 0
              ? ""
              : parseFloat(props.infoprecent.i).toFixed()
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
              : parseFloat(props.info.i).toFixed()
          }
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
          id="j"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, j: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.j || props.infoprecent.j === 0
              ? ""
              : parseFloat(props.infoprecent.j).toFixed()
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
              : parseFloat(props.info.j).toFixed()
          }
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
          id="k"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, k: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.k || props.infoprecent.k === 0
              ? ""
              : parseFloat(props.infoprecent.k).toFixed()
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
              : parseFloat(props.info.k).toFixed()
          }
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
          id="l"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, l: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.l || props.infoprecent.l === 0
              ? ""
              : parseFloat(props.infoprecent.l).toFixed()
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
              : parseFloat(props.info.l).toFixed()
          }
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
          id="m"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, m: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.m || props.infoprecent.m === 0
              ? ""
              : parseFloat(props.infoprecent.m).toFixed()
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
              : parseFloat(props.info.m).toFixed()
          }
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
          id="n"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, n: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.n || props.infoprecent.n === 0
              ? ""
              : parseFloat(props.infoprecent.n).toFixed()
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
              : parseFloat(props.info.n).toFixed()
          }
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
          id="o"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, o: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.o || props.infoprecent.o === 0
              ? ""
              : parseFloat(props.infoprecent.o).toFixed()
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
              : parseFloat(props.info.o).toFixed()
          }
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
          id="p"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, p: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.p || props.infoprecent.p === 0
              ? ""
              : parseFloat(props.infoprecent.p).toFixed()
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
              : parseFloat(props.info.p).toFixed()
          }
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
          id="q"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, q: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.q || props.infoprecent.q === 0
              ? ""
              : parseFloat(props.infoprecent.q).toFixed()
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
              : parseFloat(props.info.q).toFixed()
          }
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
          id="r"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, r: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.r || props.infoprecent.r === 0
              ? ""
              : parseFloat(props.infoprecent.r).toFixed()
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
              : parseFloat(props.info.r).toFixed()
          }
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
          id="s"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, s: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.s || props.infoprecent.s === 0
              ? ""
              : parseFloat(props.infoprecent.s).toFixed()
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
              : parseFloat(props.info.s).toFixed()
          }
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
          id="t"
          onChange={(e) =>
            props.SetInfoPrecent({ ...props.infoprecent, t: e.target.value })
          }
          onWheel={() => document.activeElement.blur()}
          onBlur={changeInputValue}
          value={
            !props.infoprecent.t || props.infoprecent.t === 0
              ? ""
              : parseFloat(props.infoprecent.t).toFixed()
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
              : parseFloat(props.info.t).toFixed()
          }
        />
      </section>

      <button onBlur={ClearData}>გასუფთავება</button>
    </div>
  );
}
export default InputRender;
