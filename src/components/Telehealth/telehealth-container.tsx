import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./TelehealthContainer.module.css";
import LogoLink from "../common/LogoLink/LogoLink";

type TelehealthContainerType = {
  publixBrandmarksvg?: string;

  /** Style props */
  telehealthDisplay?: Property.Display;
  onlinePrescriptionRefillDisplay?: Property.Display;
  inPersonDoctorVisitDisplay?: Property.Display;
  eDConsultDisplay?: Property.Display;
  mentalHealthConsultDisplay?: Property.Display;
  uTIConsultDisplay?: Property.Display;
  urgentCareConsultDisplay?: Property.Display;
  publixAllRightsReservedDisplay?: Property.Display;
  privacyPolicyDisclaimerTeDisplay?: Property.Display;
};

const TelehealthContainer: FunctionComponent<TelehealthContainerType> = memo(
  ({
    publixBrandmarksvg,
    telehealthDisplay,
    onlinePrescriptionRefillDisplay,
    inPersonDoctorVisitDisplay,
    eDConsultDisplay,
    mentalHealthConsultDisplay,
    uTIConsultDisplay,
    urgentCareConsultDisplay,
    publixAllRightsReservedDisplay,
    privacyPolicyDisclaimerTeDisplay,
  }) => {
    const telehealthStyle: CSS.Properties = useMemo(() => {
      return {
        display: telehealthDisplay,
      };
    }, [telehealthDisplay]);

    const onlinePrescriptionRefillStyle: CSS.Properties = useMemo(() => {
      return {
        display: onlinePrescriptionRefillDisplay,
      };
    }, [onlinePrescriptionRefillDisplay]);

    const inPersonDoctorVisitStyle: CSS.Properties = useMemo(() => {
      return {
        display: inPersonDoctorVisitDisplay,
      };
    }, [inPersonDoctorVisitDisplay]);

    const eDConsultStyle: CSS.Properties = useMemo(() => {
      return {
        display: eDConsultDisplay,
      };
    }, [eDConsultDisplay]);

    const mentalHealthConsultStyle: CSS.Properties = useMemo(() => {
      return {
        display: mentalHealthConsultDisplay,
      };
    }, [mentalHealthConsultDisplay]);

    const uTIConsultStyle: CSS.Properties = useMemo(() => {
      return {
        display: uTIConsultDisplay,
      };
    }, [uTIConsultDisplay]);

    const urgentCareConsultStyle: CSS.Properties = useMemo(() => {
      return {
        display: urgentCareConsultDisplay,
      };
    }, [urgentCareConsultDisplay]);

    const publixAllRightsStyle: CSS.Properties = useMemo(() => {
      return {
        display: publixAllRightsReservedDisplay,
      };
    }, [publixAllRightsReservedDisplay]);

    const privacyPolicyStyle: CSS.Properties = useMemo(() => {
      return {
        display: privacyPolicyDisclaimerTeDisplay,
      };
    }, [privacyPolicyDisclaimerTeDisplay]);

    return (
      <div className={styles.footer}>
        <div className={styles.publixBrandmarksvgParent}>
          <LogoLink />
          <div className={styles.spacer}>
            <div className={styles.spacerChild} />
          </div>
          <div className={styles.footerMenu}>
            <div className={styles.telehealthParent}>
              <div className={styles.telehealth} style={telehealthStyle}>
                Telehealth
              </div>
              <div
                className={styles.telehealth}
                style={onlinePrescriptionRefillStyle}
              >
                Online prescription refill
              </div>
              <div
                className={styles.telehealth}
                style={inPersonDoctorVisitStyle}
              >
                In-person doctor visit
              </div>
            </div>
            <div className={styles.telehealthParent}>
              <div className={styles.telehealth} style={eDConsultStyle}>
                ED consult
              </div>
              <div
                className={styles.telehealth}
                style={mentalHealthConsultStyle}
              >
                Mental health consult
              </div>
            </div>
            <div className={styles.telehealthParent}>
              <div className={styles.telehealth} style={uTIConsultStyle}>
                UTI consult
              </div>
              <div className={styles.telehealth} style={urgentCareConsultStyle}>
                Urgent care consult
              </div>
            </div>
          </div>
        </div>
        <div className={styles.spacer1}>
          <div className={styles.spacerChild} />
        </div>
        <img className={styles.footerChild} alt="" src="/vector-44.svg" />
        <div className={styles.spacer2}>
          <div className={styles.spacerChild} />
        </div>
        <div className={styles.publixAllRightsReservedParent}>
          <div className={styles.publixAllRights} style={publixAllRightsStyle}>
            © 2023 Publix. All Rights Reserved.
          </div>
          <div className={styles.publixAllRights} style={privacyPolicyStyle}>
            Privacy Policy | Disclaimer | Terms of Service
          </div>
        </div>
      </div>
    );
  }
);

export default TelehealthContainer;
