import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ContainerGrid.module.css";

type ContainerGridType = {
  svgsc1jw854g0?: string;
  layer1?: string;
  layer11?: string;
  star1?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
  propDisplay?: Property.Display;
  propDisplay1?: Property.Display;
  propDisplay2?: Property.Display;
  propDisplay3?: Property.Display;
};

const ContainerGrid: FunctionComponent<ContainerGridType> = memo(
  ({
    svgsc1jw854g0,
    layer1,
    layer11,
    star1,
    propTop,
    propLeft,
    propDisplay,
    propDisplay1,
    propDisplay2,
    propDisplay3,
  }) => {
    const frameDivStyle: CSS.Properties = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
      };
    }, [propTop, propLeft]);

    const thousandsOfDoctorsContainerStyle: CSS.Properties = useMemo(() => {
      return {
        display: propDisplay,
      };
    }, [propDisplay]);

    const savedByPatientsContainerStyle: CSS.Properties = useMemo(() => {
      return {
        display: propDisplay1,
      };
    }, [propDisplay1]);

    const patientSatisfactionStyle: CSS.Properties = useMemo(() => {
      return {
        display: propDisplay2,
      };
    }, [propDisplay2]);

    const onTrustpilotStyle: CSS.Properties = useMemo(() => {
      return {
        display: propDisplay3,
      };
    }, [propDisplay3]);

    return (
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.svgsc1jw854g0Parent}>
          <img
            className={styles.svgsc1jw854g0Icon}
            alt=""
            src={svgsc1jw854g0}
          />
          <div
            className={styles.thousandsOfDoctorsContainer}
            style={thousandsOfDoctorsContainerStyle}
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
            <img className={styles.layer1Icon} alt="" src={layer1} />
          </div>
          <div
            className={styles.thousandsOfDoctorsContainer}
            style={savedByPatientsContainerStyle}
          >
            <span className={styles.thousands}>{`$25,000,000+ `}</span>
            <span className={styles.ofDoctorsAnd}>saved by patients</span>
          </div>
        </div>
        <div className={styles.svgsc1jw854g0Parent}>
          <div className={styles.layer1Wrapper}>
            <img className={styles.layer1Icon1} alt="" src={layer11} />
          </div>
          <div
            className={styles.thousandsOfDoctorsContainer}
            style={patientSatisfactionStyle}
          >
            <span className={styles.thousands}>{`95% `}</span>
            <span className={styles.ofDoctorsAnd}>patient satisfaction</span>
          </div>
        </div>
        <div className={styles.svgsc1jw854g0Parent}>
          <img className={styles.frameChild} alt="" src={star1} />
          <div
            className={styles.thousandsOfDoctorsContainer}
            style={onTrustpilotStyle}
          >
            <span className={styles.thousands}>{`4.3 `}</span>
            <span className={styles.ofDoctorsAnd}>on Trustpilot</span>
          </div>
        </div>
      </div>
    );
  }
);

export default ContainerGrid;
