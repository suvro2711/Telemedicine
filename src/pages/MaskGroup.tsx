import { FunctionComponent } from "react";
import ProductSearchSection from "../components/ProductSearch/ProductSearchSection";
import DoctorSection from "../components/DoctorsAppointment/DoctorSection";
import MarketComparisonContainer from "../components/MarketingComparison/market-comparison-container";
import TelehealthContainer from "../components/Telehealth/telehealth-container";
import styles from "./MaskGroup.module.css";
import Container from '@mui/material/Container';
import { useCommonStyles } from "../MaterialUIStyles";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import OurPatientsLoveUs from "../components/OurPatientsLoveUs/OurPatientsLoveUs";
import ConnectWith from "../components/ConnectWith/ConnectWith";
import PublixVsOthers from "../components/PublixVsOthers/PublixVsOthers";

const MaskGroup: FunctionComponent = () => {
  const commonStyle = useCommonStyles()
  return (
    <>
    <div className={styles.headerWapper}>
          <Header />
    </div>
    <div className={styles.subWapper}>
          <ProductSearchSection />
           <DoctorSection />
           <PublixVsOthers />
          <MarketComparisonContainer
            dolorEgestasUllamcorperNi="Don’t wait weeks for an appointment. Our doctors, therapists, and specialists can help you with the flu, infections, anxiety, stress, skin conditions, and provide advice on serious medical conditions. No matter what you're facing, we’re available from wherever you are by phone, video, or app."
            star1="/star-11.svg"
            star11="/star-11.svg"
            othersDisplay="inline-block"
            frame21BoxSizing="border-box"
            propDisplay="inline-block"
            propDisplay1="inline-block"
            appointmentNeededTakesHouDisplay="inline-block"
            unreliableDisplay="inline-block"
            fullPriceDisplay="inline-block"
            publixDisplay="inline-block"
            frame21BoxSizing1="border-box"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            onlineFormSubmissionTakesDisplay="inline-block"
            openDisplay="inline-block"
            upTo87DiscountDisplay="inline-block"
            visitFeeDisplay="inline-block"
            ratingDisplay="inline-block"
            typeOfConsultationDisplay="inline-block"
            weekendsNightsDisplay="inline-block"
            refundableDisplay="inline-block"
            mDCostDisplay="inline-block"
          />
           <OurPatientsLoveUs />
           <ConnectWith />
    </div>
    <div className={styles.headerWapper}>
          <Footer />
    </div>
    </>
  );
};

export default MaskGroup;
