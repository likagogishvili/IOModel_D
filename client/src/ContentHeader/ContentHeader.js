import "./ContentHeader.css";
import { useState } from "react";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";
import headerImage from "./img/headerBG.png";
import headerLogo from "./img/headerLogo.png";
function ContentHeader() {
  const [languageChange, SetLanguageChange] = useState(false);
  const imgLink = [
    "http://sna.geostat.ge/img/home/en.png",
    "http://sna.geostat.ge/img/home/ka.png",
  ];
  console.log(languageChange);
  return (
    <header
      className="contH"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="divHeaderCont">
        <div className="headerContentSmall">
          <a href="https://www.geostat.ge/ka" target="_blank" rel="noreferrer" className="divHeaderCont1">
            <img src={headerLogo} alt="" width={"50%"} height={"100%"} />
          </a>
        <div className="divHeaderCont2">
          <p>დარგების ეკონომიკური ანალიზი</p>
        </div>
        <div className="imgDiv">
          <a
            href="https://www.facebook.com/geostat.ge/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="" width={"100%"} height={"100%"} />
          </a>
          <a
            href="https://twitter.com/Geostat100"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="" width={"100%"} height={"100%"} />
          </a>
          <a
            href="https://www.youtube.com/user/CensusGe"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="" width={"100%"} height={"100%"} />
          </a>
          {!languageChange ? (
            <img
              src={imgLink[0]}
              alt=""
              width={"100%"}
              height={"100%"}
              onClick={() => SetLanguageChange(!languageChange)}
            />
          ) : (
            <img
              src={imgLink[1]}
              alt=""
              width={"100%"}
              height={"100%"}
              onClick={() => SetLanguageChange(!languageChange)}
            />
          )}
        </div>
      </div>
      </div>
    </header>
  );
}
export default ContentHeader;
