import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./CardRightDetails.module.css";



const CardRightDetails: FunctionComponent= memo(() => {

    return (
      <div className={styles.frameParent}>
        <div className={styles.svgsc1jw854g0Parent}>
          <div className={styles.layer1Wrapper}>
            <img className={styles.layer1Icon1} alt="" src={"/Icons/steth.svg"} />
          </div>
          <div
            className={styles.thousandsOfDoctorsContainer}
          >
            <span className={styles.thousands}>Thousands</span>
            <span className={styles.ofDoctorsAnd}>
              {" "}
              of doctors and specialists
            </span>
          </div>
        </div>
        <div className={styles.svgsc1jw854g0Parent}>
          <div className={styles.layer1Wrapper}>
            <img className={styles.layer1Icon} alt="" src={"/Icons/dollar.svg"} />
          </div>
          <div
            className={styles.thousandsOfDoctorsContainer}
          >
            <span className={styles.thousands}>{`$25,000,000+ `}</span>
            <span className={styles.ofDoctorsAnd}>saved by patients</span>
          </div>
        </div>
        <div className={styles.svgsc1jw854g0Parent}>
          <div className={styles.layer1Wrapper}>
            <img className={styles.layer1Icon1} alt="" src={"/Icons/thum.svg"} />
          </div>
          <div
            className={styles.thousandsOfDoctorsContainer}
          >
            <span className={styles.thousands}>{`95% `}</span>
            <span className={styles.ofDoctorsAnd}>patient satisfaction</span>
          </div>
        </div>
        <div className={styles.svgsc1jw854g0Parent}>
          <img className={styles.frameChild} alt="" src={"/Icons/star.svg"} />
          <div
            className={styles.thousandsOfDoctorsContainer}
          >
            <span className={styles.thousands}>{`4.3 `}</span>
            <span className={styles.ofDoctorsAnd}>on Trustpilot</span>
          </div>
        </div>
      </div>
    );
  }
);

export default CardRightDetails;
