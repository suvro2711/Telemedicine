import { FunctionComponent, memo, useCallback } from "react";
import ContainerGrid from "../ContainerGrid";
import styles from "./ProductSearchSection.module.css";
import { Container } from "@mui/material";
import LogoLink from "../common/LogoLink/LogoLink";

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
                <ContainerGrid
                  svgsc1jw854g0="/Icons/steth.svg"
                  layer1="/Icons/dollar.svg"
                  layer11="/Icons/thum.svg"
                  star1="/Icons/star.svg"
                  propTop="15px"
                  propLeft="392px"
                  propDisplay="unset"
                  propDisplay1="unset"
                  propDisplay2="unset"
                  propDisplay3="unset"
                />
                <div className={styles.chatmdsSavingCardYellow1Parent}>
                  <div className={styles.groupWrapper}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.groupChild} />
                      <div className={styles.groupItem}>
                        <div className={styles.cardInfo}>
                          <div className={styles.memberId021916}>Member ID: 021916</div>
                          <div className={styles.bin021916}>BIN: 021916</div>
                          <div className={styles.pcn021916}>PCN: 021916</div>
                          <div className={styles.group021916}>Group: 021916</div>
                        </div>
                        <div className={styles.cardDiscount}>
                          <div>Save</div>
                          <div>87%</div>
                        </div>
                      </div>
                      <img
                        className={styles.publixBrandmarksvgIcon1}
                        alt=""
                        src="/publix-brandmarksvg6.svg"
                      />
                      <div className={styles.prescriptionSavingCard}>
                        <p className={styles.prescription}>Prescription</p>
                        <p className={styles.prescription}>Saving Card</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img className={styles.cardShadow} src="/cardShadow.PNG" />
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
