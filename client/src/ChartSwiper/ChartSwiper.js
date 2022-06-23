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
            <p className="rightSideChartsp">გამოშვება, მლნ ლარი</p>
            <PieChart thirdDiagramValues1={props.thirdDiagramValues1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperCharts">
            <p className="rightSideChartsp">დამატებული ღირებულება, მლნ ლარი</p>
            <PieChart thirdDiagramValues1={props.thirdDiagramValues2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperCharts">
            <p className="rightSideChartsp">დასაქმება, კაცი</p>
            <PieChart thirdDiagramValues1={props.thirdDiagramValues3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperCharts">
            <p className="rightSideChartsp">იმპორტი, მლნ ლარი</p>
            <PieChart thirdDiagramValues1={props.thirdDiagramValues4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperCharts">
            <p className="rightSideChartsp">
              ძირითადი კაპიტალის მთლიანი ფორმირება, მლნ ლარი
            </p>
            <PieChart thirdDiagramValues1={props.thirdDiagramValues5} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperCharts">
            <p className="rightSideChartsp">შრომის ანაზღაურება, მლნ ლარი</p>
            <PieChart thirdDiagramValues1={props.thirdDiagramValues6} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default ChartSwiper;
