import "./ContentHeader.css";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";
import headerImage from "./img/headerBG.png";
import headerLogo from "./img/headerLogo.png";
import iconI from "./img/information.png";
import { useState } from "react";
import InfoWindow from "./InfoWindow";

function ContentHeader(props) {
  const [popUp, SetPopUp] = useState(false);
  function ChangePopUp() {
    SetPopUp(!popUp);
  }
  let url = "http://eap.geostat.ge/";
  let encodedURL = encodeURI(url);

  return (
    <header
      className="contH"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      {
        popUp && 
      <InfoWindow popUp={popUp} languageChange={props.languageChange} ChangePopUp = {ChangePopUp} />

      }


      <div className="divHeaderCont">
        <div className="headerContentSmall">
          <a
            href="http://eap.geostat.ge/"
            target="_blank"
            rel="noreferrer"
            className="divHeaderCont1"
          >
            <img src={headerLogo} alt="" />
          </a>

          <div className="divHeaderCont2">
            {!props.languageChange ? (
              <p>ეკონომიკური ანალიზის პორტალი</p>
            ) : (
              <p>Economic Analysis Portal</p>
            )}
          </div>
          <div className="imgDiv">
            <div className="Info">
              <img
                src={iconI}
                alt=""
                width={"100%"}
                height={"100%"}
                onClick={ChangePopUp}
              />
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://facebook.com/sharer/sharer.php?u=${encodedURL}`}
              property="og:title"
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
            {!props.languageChange ? (
              <img
                src={"http://juniors.geostat.ge/assets/img/icons/us.svg"}
                alt=""
                width={"100%"}
                height={"100%"}
                onClick={(e) => props.LanguageChangeRender(e)}
              />
            ) : (
              <img
                src={"http://juniors.geostat.ge/assets/img/icons/ge.svg"}
                alt=""
                width={"100%"}
                height={"100%"}
                onClick={(e) => props.LanguageChangeRender(e)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
export default ContentHeader;
