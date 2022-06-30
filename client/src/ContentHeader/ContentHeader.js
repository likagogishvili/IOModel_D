import "./ContentHeader.css";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";
import headerImage from "./img/headerBG.png";
import headerLogo from "./img/headerLogo.png";
function ContentHeader(props) {
  const imgLink = [
    "http://sna.geostat.ge/img/home/en.png",
    "http://sna.geostat.ge/img/home/ka.png",
  ];
  return (
    <header
      className="contH"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="divHeaderCont">
        <div className="headerContentSmall">
          <a
            href="https://www.geostat.ge/ka"
            target="_blank"
            rel="noreferrer"
            className="divHeaderCont1"
          >
            <img src={headerLogo} alt="" />
          </a>
          <div className="divHeaderCont2">
            {!props.languageChange ? (
              <p>დარგების ეკონომიკური ანალიზი</p>
            ) : (
              <p>Economic analysis of Industries</p>
            )}
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
            {!props.languageChange ? (
              <img
                src={imgLink[0]}
                alt=""
                width={"100%"}
                height={"100%"}
                onClick={() => props.SetLanguageChange(!props.languageChange)}
              />
            ) : (
              <img
                src={imgLink[1]}
                alt=""
                width={"100%"}
                height={"100%"}
                onClick={() => props.SetLanguageChange(!props.languageChange)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
export default ContentHeader;
