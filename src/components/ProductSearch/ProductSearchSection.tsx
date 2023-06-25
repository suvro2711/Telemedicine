import { FunctionComponent, memo, useCallback } from "react";
import styles from "./ProductSearchSection.module.css";
import { Container } from "@mui/material";
import LogoLink from "../common/LogoLink/LogoLink";
import CardRightDetails from "./CardRightDetails";
import CardSection from "./CardSection";

// import mainLogo from "../resources/svg/mainlogo.svg"

const ProductSearchSection: FunctionComponent = memo(() => {
  const onFrameContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
      <div className={styles.publixHeaderParent}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.leftVerticalFrame}>
              <div className={styles.frameGroup}>
                  <div className={styles.careWhenYouNeedItParent}>
                    <div className={styles.careWhenYou}>Care when you need it</div>
                    <div className={styles.exploreTopRatedDoctors}>
                      Explore top-rated doctors at unbeatable prices. Find the care
                      you need and schedule an appointment within minutes.
                    </div>
                  </div>
                  <div className={styles.frameContainer}>
                    <div
                      className={styles.telemedicineAppointmentWrapper}
                      onClick={onFrameContainer2Click}
                    >
                      <div className={styles.telemedicineAppointment}>
                        Telemedicine Appointment
                      </div>
                    </div>
                    <div className={styles.prescriptionRefillWrapper}>
                      <div className={styles.telemedicineAppointment}>
                        Prescription Refill
                      </div>
                    </div>
                  </div>
              </div>
              <div className={styles.groupDiv}>
                <CardRightDetails />
                <CardSection />
              </div>
            </div>
            <div className={styles.rightVerticalFrame}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            </div>
          </div>
        </div>
      </div>
  );
});

export default ProductSearchSection;
