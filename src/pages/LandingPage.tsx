import { FunctionComponent } from "react";
import ProductSearchSection from "../components/ProductSearch/ProductSearchSection";
import DoctorSection from "../components/DoctorsAppointment/DoctorSection";
import MarketComparisonSection from "../components/MarketingComparison/MarketComparisonContainer";
import TelehealthContainer from "../components/Telehealth/telehealth-container";
import styles from "./LandingPage.module.css";
import Container from '@mui/material/Container';
import { useCommonStyles } from "../MaterialUIStyles";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import OurPatientsLoveUs from "../components/OurPatientsLoveUs/OurPatientsLoveUs";
import ConnectWith from "../components/ConnectWith/ConnectWith";
import PublixVsOthers from "../components/PublixVsOthers/PublixVsOthers";

const LandingPage: FunctionComponent = () => {
  const commonStyle = useCommonStyles()
  return (
    <div className={styles.landingPageWrapper}>
    <div className={styles.headerWapper}>
          <Header />
    </div>
    <div className={styles.subWapper}>
      <ProductSearchSection />
      <DoctorSection />
      <MarketComparisonSection/>
      <OurPatientsLoveUs />
      <ConnectWith />
    </div>
    <div className={styles.headerWapper}>
          <Footer />
    </div>
    </div>
  );
};

export default LandingPage;
