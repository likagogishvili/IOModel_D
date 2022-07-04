import "./rightSide.css";
import ChartSwiper from "../ChartSwiper/ChartSwiper";
function RightSide(props) {
  //gamoshveba Sums
  const gamoshvebaDzveliSum = props.gamoshveba.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const gamoshvebAaxaliSum = props.gamoshvebaAxali.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const gamoshvebaPerc = (gamoshvebAaxaliSum / gamoshvebaDzveliSum) * 100 - 100;

  //damatebitiGirebuleba Sums
  const damatebitiDzveliSum = props.damatebiti.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const damatebitiAxaliSum = props.damatebitiAxali.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const damatebitiPerc = (damatebitiAxaliSum / damatebitiDzveliSum) * 100 - 100;

  //dasaqmeba Sums
  const dasaqmebaSum = props.dasaqmeba.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const dasaqmebaAxaliSum = props.dasaqmebaAxali.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const dasaqmebaPerc = (dasaqmebaAxaliSum / dasaqmebaSum) * 100 - 100;

  // importi Sums
  const importiSum = props.importi.reduce((partialSum, a) => partialSum + a, 0);
  const importiAxaliSum = props.importiAxali.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const importiPerc = (importiAxaliSum / importiSum) * 100 - 100;

  // dziritadi kapitalis mtliani formireba Sums
  const kapitaliSum = props.kapitali.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const kapitaliAxaliSum = props.kapitaliAxali.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const kapitaliPerc = (kapitaliAxaliSum / kapitaliSum) * 100 - 100;

  // shroma Sums
  const shromaSum = props.shroma.reduce((partialSum, a) => partialSum + a, 0);
  const shromaAxaliSum = props.shromaAxali.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const shromaPerc = (shromaAxaliSum / shromaSum) * 100 - 100;

  return (
    <div className="RightInformation">
      <div className="inputHeader1">
        {!props.languageChange ? (
          <div className="rightHeader">
            <div className="rightHeaderChild1"></div>
            <div className="rightHeaderChild2">მიმდინარე მაჩვენებელი</div>
            <div className="rightHeaderChild2">განახლებული მაჩვენებელი</div>
            <div className="rightHeaderChild2">პროცენტული ცვლილება</div>
          </div>
        ) : (
          <div className="rightHeader">
            <div className="rightHeaderChild1"></div>
            <div className="rightHeaderChild2">Current value</div>
            <div className="rightHeaderChild2">Updated Value</div>
            <div className="rightHeaderChild2">Percentage Change</div>
          </div>
        )}
      </div>
      <div>


        <section className="RightContent">
          <div className="RightContentChild1">
            {!props.languageChange ? "მთლიანი შიდა პროდუქტი, მლნ ლარი" : "Value added, mil Gel"}
          </div>
          <div className="RightContentChild2">
            {(Math.round(damatebitiDzveliSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {(Math.round(damatebitiAxaliSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {Math.round(damatebitiPerc * 10) / 10} %
          </div>
        </section>

        <section className="RightContent">
          <div className="RightContentChild1">
            {!props.languageChange ? "გამოშვება, მლნ ლარი" : "Output, mil Gel"}
          </div>
          <div className="RightContentChild2">
            {(Math.round(gamoshvebaDzveliSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {(Math.round(gamoshvebAaxaliSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {Math.round(gamoshvebaPerc * 10) / 10} %
          </div>
        </section>

        <section className="RightContent">
          <div className="RightContentChild1">
            {!props.languageChange ? "დასაქმება, ათასი კაცი" : "Employment, person"}
          </div>
          <div className="RightContentChild2">
            {(Math.round(dasaqmebaSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {(Math.round(dasaqmebaAxaliSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {Math.round(dasaqmebaPerc * 10) / 10} %
          </div>
        </section>


        <section className="RightContent">
          <div className="RightContentChild1">
            {!props.languageChange ? "იმპორტი, მლნ ლარი" : "Import, mil Gel"}
          </div>
          <div className="RightContentChild2">
            {(Math.round(importiSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {(Math.round(importiAxaliSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {Math.round(importiPerc * 10) / 10} %
          </div>
        </section>

        <section className="RightContent">
          <div className="RightContentChild1">
            {!props.languageChange
              ? "ძირითადი კაპიტალის ფორმირება, მლნ ლარი"
              : "Gross capital formation, mil Gel"}
          </div>
          <div className="RightContentChild2">
            {(Math.round(kapitaliSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {(Math.round(kapitaliAxaliSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {Math.round(kapitaliPerc * 10) / 10} %
          </div>
        </section>

        <section className="RightContent">
          <div className="RightContentChild1">
            {!props.languageChange
              ? "შრომის ანაზღაურება, მლნ ლარი"
              : "Compensation of employees, mil Gel;"}
          </div>
          <div className="RightContentChild2">
            {(Math.round(shromaSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {(Math.round(shromaAxaliSum * 10) / 10).toString()}
          </div>
          <div className="RightContentChild3">
            {Math.round(shromaPerc * 10) / 10} %
          </div>
        </section>
      </div>

      <div className="BarChartSxvaoba">
        <ChartSwiper
          thirdDiagramValues1={props.thirdDiagramValues1}
          thirdDiagramValues2={props.thirdDiagramValues2}
          thirdDiagramValues3={props.thirdDiagramValues3}
          thirdDiagramValues4={props.thirdDiagramValues4}
          thirdDiagramValues5={props.thirdDiagramValues5}
          thirdDiagramValues6={props.thirdDiagramValues6}
          languageChange={props.languageChange}
        />
      </div>
    </div>
  );
}

export default RightSide;
