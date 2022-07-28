import "./Credits.css";
function Credits(props) {
  return (
    <div className="creditsdiv">
      <p style={{ fontSize: "10px" }}>
        {props.languageChange === false
          ? "© 2022 | ყველა უფლება დაცულია"
          : "© 2022 All rights reserved."}
      </p>
      <p style={{ fontSize: "12px" }}>
        {props.languageChange === false
          ? "სტატისტიკის ეროვნული სამსახური"
          : "National Statistics Office of Georgia (Geostat)"}
      </p>

      <p style={{ fontSize: "11px" }}>
        {props.languageChange === false ? (
          <a
            href="https://www.geostat.ge/ka/page/monacemta-gamoyenebis-pirobebi"
            style={{ color: "#000"}}
          >
            მონაცემთა გამოყენების პირობები
          </a>
        ) : (
          <a
            href="https://www.geostat.ge/en/page/monacemta-gamoyenebis-pirobebi"
            style={{ color: "#000"}}
          >
            Terms of Use
          </a>
        )}
      </p>
    </div>
  );
}
export default Credits;
