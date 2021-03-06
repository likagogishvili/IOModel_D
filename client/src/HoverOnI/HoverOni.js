import "./hoverOni.css";

function HoverOni(props) {
  if (!props.languageChange) {
    var namesarray = [
      "სოფლის, სატყეო და თევზის მეურნეობა",
      "სამთომოპოვებითი მრეწველობა",
      "დამამუშავებელი მრეწველობა",
      "ელექტროენერგიის, აირის, ორთქლის და კონდიცირებული ჰაერის მიწოდება",
      "წყალმომარაგება; კანალიზაცია, ნარჩენების მართვა და დაბინძურებისაგან გასუფთავების საქმიანობები",
      "მშენებლობა",
      "საბითუმო და საცალო ვაჭრობა; ავტომობილების და მოტოციკლების რემონტი",
      "ტრანსპორტი და დასაწყობება",
      "განთავსების საშუალებებით უზრუნველყოფის და საკვების მიწოდების საქმიანობები",
      "ინფორმაცია და კომუნიკაცია",
      "საფინანსო და სადაზღვევო საქმიანობები",
      "უძრავ ქონებასთან დაკავშირებული საქმიანობები",
      "პროფესიული, სამეცნიერო და ტექნიკური საქმიანობები",
      "ადმინისტრაციული და დამხმარე მომსახურების საქმიანობები",
      "სახელმწიფო მმართველობა და თავდაცვა; სავალდებულო სოციალური უსაფრთხოება",
      "განათლება",
      "ჯანდაცვა და სოციალური მომსახურების საქმიანობები",
      "ხელოვნება, გართობა და დასვენება",
      "სხვა სახის მომსახურება",
      "შინამეურნეობების, როგორც დამქირავებლის, საქმიანობები; არადიფერენცირებული საქონლის და მომსახურების წარმოება შინამეურნეობების მიერ საკუთარი მოხმარებისათვის",
    ];
  } else {
    namesarray = [
      "Agriculture, forestry and fishing",
      "Mining and quarrying",
      "Manufacturing",
      "Electricity, gas, steam and air conditioning supply",
      "Water supply; sewerage, waste management and remediation activities",
      "Construction",
      "Wholesale and retail trade repair of motor vehicles and motorcycles",
      "Transportation and storage",
      "Accommodation and food service activities",
      "Information and communication",
      "Financial and insurance activities",
      "Real estate activities",
      "Professional, scientific and technical activities",
      "Administrative and support service activities",
      "Public administration and defence compulsory social security",
      "Education",
      "Human health activities",
      "Arts, entertainment and recreation",
      "Other service activities",
      "Activities of households as employers of domestic personnel and undifferentiated goods and services production of households for own use",
    ];
  }

  return (
    <div>
      {props.symbol1 && <p className="onSymbolHover">{namesarray[0]}</p>}

      {props.symbol2 && (
        <p className="onSymbolHover" style={{ top: 289 }}>
          {namesarray[1]}
        </p>
      )}

      {props.symbol3 && (
        <p className="onSymbolHover" style={{ top: 336 }}>
          {namesarray[2]}
        </p>
      )}

      {props.symbol4 && (
        <p className="onSymbolHover" style={{ top: 389 }}>
          {namesarray[3]}
        </p>
      )}

      {props.symbol5 && (
        <p className="onSymbolHover" style={{ top: 442 }}>
          {namesarray[4]}
        </p>
      )}

      {props.symbol6 && (
        <p className="onSymbolHover" style={{ top: 495 }}>
          {namesarray[5]}
        </p>
      )}

      {props.symbol7 && (
        <p className="onSymbolHover" style={{ top: 548 }}>
          {namesarray[6]}
        </p>
      )}

      {props.symbol8 && (
        <p className="onSymbolHover" style={{ top: 599 }}>
          {namesarray[7]}
        </p>
      )}

      {props.symbol9 && (
        <p className="onSymbolHover" style={{ top: 651 }}>
          {namesarray[8]}
        </p>
      )}
      {props.symbol10 && (
        <p className="onSymbolHover" style={{ top: 705 }}>
          {namesarray[9]}
        </p>
      )}
      {props.symbol11 && (
        <p className="onSymbolHover" style={{ top: 759 }}>
          {namesarray[10]}
        </p>
      )}

      {props.symbol12 && (
        <p className="onSymbolHover" style={{ top: 809 }}>
          {namesarray[11]}
        </p>
      )}
      {props.symbol13 && (
        <p className="onSymbolHover" style={{ top: 868 }}>
          {namesarray[12]}
        </p>
      )}
      {props.symbol14 && (
        <p className="onSymbolHover" style={{ top: 922 }}>
          {namesarray[13]}
        </p>
      )}
      {props.symbol15 && (
        <p className="onSymbolHover" style={{ top: 970 }}>
          {namesarray[14]}
        </p>
      )}

      {props.symbol16 && (
        <p className="onSymbolHover" style={{ top: 1025 }}>
          {namesarray[15]}
        </p>
      )}
      {props.symbol17 && (
        <p className="onSymbolHover" style={{ top: 1079 }}>
          {namesarray[16]}
        </p>
      )}

      {props.symbol18 && (
        <p className="onSymbolHover" style={{ top: 1130 }}>
          {namesarray[17]}
        </p>
      )}

      {props.symbol19 && (
        <p className="onSymbolHover" style={{ top: 1182 }}>
          {namesarray[18]}
        </p>
      )}

      {props.symbol20 && (
        <p className="onSymbolHover" style={{ top: 1236 }}>
          {namesarray[19]}
        </p>
      )}
    </div>
  );
}
export default HoverOni;
