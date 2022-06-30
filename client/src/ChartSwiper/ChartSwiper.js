import PieChart from "../ChartsFolder/PieChart";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ChartSwiper.css";
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
      >
        <SwiperSlide>
          <div className="swiperCharts">
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
          <div className="swiperCharts">
            <p className="rightSideChartsp">
              {!props.languageChange
                ? "დამატებული ღირებულება, მლნ ლარი"
                : "GVA, Mil. Lari"}
            </p>
            <PieChart
              thirdDiagramValues1={props.thirdDiagramValues2}
              languageChange={props.languageChange}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperCharts">
            <p className="rightSideChartsp">
              {!props.languageChange ? "დასაქმება, კაცი" : "Employment Person"}
            </p>
            <PieChart
              thirdDiagramValues1={props.thirdDiagramValues3}
              languageChange={props.languageChange}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperCharts">
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
          <div className="swiperCharts">
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
          <div className="swiperCharts">
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
