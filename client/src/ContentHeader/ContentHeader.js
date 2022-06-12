import "./ContentHeader.css";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";

function ContentHeader() {
  return (
    <header className="contH">
      <div>
        <a href="https://www.geostat.ge/ka" target="_blank" rel="noreferrer">
          <img
            src="https://www.geostat.ge/img/logo.svg"
            alt=""
            width={"90%"}
            height={"90%"}
          />
        </a>
      </div>
      <div>
        <p>დარგთაშორისი ანალიზი</p>
      </div>
      <div>
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
