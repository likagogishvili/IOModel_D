import "./ContentHeader.css";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";
import headerImage from "./img/headerBG.png";
import headerLogo from "./img/headerLogo.png";
function ContentHeader() {
  return (
    <header
      className="contH"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="divHeaderCont">
        <div className="divHeaderCont1">
          <a href="https://www.geostat.ge/ka" target="_blank" rel="noreferrer">
            <img src={headerLogo} alt="" width={"60%"} height={"100%"} />
          </a>
        </div>
        <div className="divHeaderCont2">
          <p>დარგთაშორისი ანალიზი</p>
        </div>
        <div className="imgDiv">
          <a
            href="https://www.facebook.com/geostat.ge/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="" />
          </a>
          <a
            href="https://twitter.com/Geostat100"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
          <a
            href="https://www.youtube.com/user/CensusGe"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}
export default ContentHeader;
