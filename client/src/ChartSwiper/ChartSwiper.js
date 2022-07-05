import PieChart from "../ChartsFolder/PieChart";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ChartSwiper.css";
import portali from "./img/portali.jpg";
import portali1 from "./img/portali-1.jpg";
import portali2 from "./img/portali-2.jpg";
import portali3 from "./img/portali-3.jpg";
import portali4 from "./img/portali-4.jpg";
import portali5 from "./img/portali-5.jpg";

SwiperCore.use([Navigation, Pagination]);

function ChartSwiper(props) {
  return (
    <div>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={50}
        slidesPerView={1}
        style={{ padding: "0px" }}
      >
        <SwiperSlide style={{ padding: "0px" }}>
          <div
            className="swiperCharts"
            style={{ backgroundImage: `url(${portali1})` }}
          >
            <p className="rightSideChartsp">
              {!props.languageChange
                ? "მთლიანი შიდა პროდუქტი, მლნ ლარი"
                : "GVA, Mil. Lari"}
            </p>
            <PieChart
              thirdDiagramValues1={props.thirdDiagramValues2}
              languageChange={props.languageChange}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiperCharts"
            style={{ backgroundImage: `url(${portali})` }}
          >
            <p className="rightSideChartsp">
              {!props.languageChange
                ? "გამოშვება, მლნ ლარი"
                : "Output, Mil. Lari"}
            </p>
            <PieChart
              thirdDiagramValues1={props.thirdDiagramValues1}
              languageChange={props.languageChange}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="swiperCharts"
            style={{ backgroundImage: `url(${portali2})` }}
          >
            <p className="rightSideChartsp">
              {!props.languageChange
                ? "დასაქმება, ათასი კაცი"
                : "Employment Person"}
            </p>
            <PieChart
              thirdDiagramValues1={props.thirdDiagramValues3}
              languageChange={props.languageChange}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiperCharts"
            style={{ backgroundImage: `url(${portali3})` }}
          >
            <p className="rightSideChartsp">
              {!props.languageChange ? "იმპორტი, მლნ ლარი" : "Import Mil. Lari"}
            </p>
            <PieChart
              thirdDiagramValues1={props.thirdDiagramValues4}
              languageChange={props.languageChange}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiperCharts"
            style={{ backgroundImage: `url(${portali4})` }}
          >
            <p className="rightSideChartsp">
              {!props.languageChange
                ? "ძირითადი კაპიტალის მთლიანი ფორმირება, მლნ ლარი"
                : "GFCF Mil. Lari"}
            </p>
            <PieChart
              thirdDiagramValues1={props.thirdDiagramValues5}
              languageChange={props.languageChange}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiperCharts"
            style={{ backgroundImage: `url(${portali5})` }}
          >
            <p className="rightSideChartsp">
              {!props.languageChange
                ? "შრომის ანაზღაურება, მლნ ლარი"
                : "Compensation of employees. Mil. Lari"}
            </p>
            <PieChart
              thirdDiagramValues1={props.thirdDiagramValues6}
              languageChange={props.languageChange}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default ChartSwiper;
