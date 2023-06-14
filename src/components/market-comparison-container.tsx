import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MarketComparisonContainer.module.css";

type MarketComparisonContainerType = {
  dolorEgestasUllamcorperNi?: string;
  star1?: string;
  star11?: string;

  /** Style props */
  othersDisplay?: Property.Display;
  frame21BoxSizing?: Property.BoxSizing;
  propDisplay?: Property.Display;
  propDisplay1?: Property.Display;
  appointmentNeededTakesHouDisplay?: Property.Display;
  unreliableDisplay?: Property.Display;
  fullPriceDisplay?: Property.Display;
  publixDisplay?: Property.Display;
  frame21BoxSizing1?: Property.BoxSizing;
  propDisplay2?: Property.Display;
  propDisplay3?: Property.Display;
  onlineFormSubmissionTakesDisplay?: Property.Display;
  openDisplay?: Property.Display;
  upTo87DiscountDisplay?: Property.Display;
  visitFeeDisplay?: Property.Display;
  ratingDisplay?: Property.Display;
  typeOfConsultationDisplay?: Property.Display;
  weekendsNightsDisplay?: Property.Display;
  refundableDisplay?: Property.Display;
  mDCostDisplay?: Property.Display;
};

const MarketComparisonContainer: FunctionComponent<MarketComparisonContainerType> =
  memo(
    ({
      dolorEgestasUllamcorperNi,
      star1,
      star11,
      othersDisplay,
      frame21BoxSizing,
      propDisplay,
      propDisplay1,
      appointmentNeededTakesHouDisplay,
      unreliableDisplay,
      fullPriceDisplay,
      publixDisplay,
      frame21BoxSizing1,
      propDisplay2,
      propDisplay3,
      onlineFormSubmissionTakesDisplay,
      openDisplay,
      upTo87DiscountDisplay,
      visitFeeDisplay,
      ratingDisplay,
      typeOfConsultationDisplay,
      weekendsNightsDisplay,
      refundableDisplay,
      mDCostDisplay,
    }) => {
      const othersStyle: CSS.Properties = useMemo(() => {
        return {
          display: othersDisplay,
        };
      }, [othersDisplay]);

      const frameDiv1Style: CSS.Properties = useMemo(() => {
        return {
          boxSizing: frame21BoxSizing,
        };
      }, [frame21BoxSizing]);

      const divStyle: CSS.Properties = useMemo(() => {
        return {
          display: propDisplay,
        };
      }, [propDisplay]);

      const div1Style: CSS.Properties = useMemo(() => {
        return {
          display: propDisplay1,
        };
      }, [propDisplay1]);

      const appointmentNeededTakesHourContainerStyle: CSS.Properties =
        useMemo(() => {
          return {
            display: appointmentNeededTakesHouDisplay,
          };
        }, [appointmentNeededTakesHouDisplay]);

      const unreliableStyle: CSS.Properties = useMemo(() => {
        return {
          display: unreliableDisplay,
        };
      }, [unreliableDisplay]);

      const fullPriceStyle: CSS.Properties = useMemo(() => {
        return {
          display: fullPriceDisplay,
        };
      }, [fullPriceDisplay]);

      const publixStyle: CSS.Properties = useMemo(() => {
        return {
          display: publixDisplay,
        };
      }, [publixDisplay]);

      const frameDiv2Style: CSS.Properties = useMemo(() => {
        return {
          boxSizing: frame21BoxSizing1,
        };
      }, [frame21BoxSizing1]);

      const div2Style: CSS.Properties = useMemo(() => {
        return {
          display: propDisplay2,
        };
      }, [propDisplay2]);

      const div3Style: CSS.Properties = useMemo(() => {
        return {
          display: propDisplay3,
        };
      }, [propDisplay3]);

      const onlineFormSubmissionTakesContainerStyle: CSS.Properties =
        useMemo(() => {
          return {
            display: onlineFormSubmissionTakesDisplay,
          };
        }, [onlineFormSubmissionTakesDisplay]);

      const openStyle: CSS.Properties = useMemo(() => {
        return {
          display: openDisplay,
        };
      }, [openDisplay]);

      const upTo87Style: CSS.Properties = useMemo(() => {
        return {
          display: upTo87DiscountDisplay,
        };
      }, [upTo87DiscountDisplay]);

      const visitFeeStyle: CSS.Properties = useMemo(() => {
        return {
          display: visitFeeDisplay,
        };
      }, [visitFeeDisplay]);

      const ratingStyle: CSS.Properties = useMemo(() => {
        return {
          display: ratingDisplay,
        };
      }, [ratingDisplay]);

      const typeOfConsultationStyle: CSS.Properties = useMemo(() => {
        return {
          display: typeOfConsultationDisplay,
        };
      }, [typeOfConsultationDisplay]);

      const weekendsNightsStyle: CSS.Properties = useMemo(() => {
        return {
          display: weekendsNightsDisplay,
        };
      }, [weekendsNightsDisplay]);

      const refundableStyle: CSS.Properties = useMemo(() => {
        return {
          display: refundableDisplay,
        };
      }, [refundableDisplay]);

      const mDCostStyle: CSS.Properties = useMemo(() => {
        return {
          display: mDCostDisplay,
        };
      }, [mDCostDisplay]);

      return (
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.publixVsOthersWrapper}>
              <div className={styles.publixVsOthers}>Publix vs. Others</div>
            </div>
            <div className={styles.dolorEgestasUllamcorper}>
              {dolorEgestasUllamcorperNi}
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.othersWrapper}>
                  <div className={styles.others} style={othersStyle}>
                    Others
                  </div>
                </div>
                <div className={styles.parent} style={frameDiv1Style}>
                  <div className={styles.div} style={divStyle}>
                    <span className={styles.span}>$</span>
                    <span className={styles.span1}>{`80 - `}</span>
                    <span className={styles.span}>$</span>
                    <span className={styles.span1}>250</span>
                  </div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-5727.svg"
                  />
                  <div className={styles.frameWrapper1}>
                    <div className={styles.starParent}>
                      <img className={styles.frameItem} alt="" src={star1} />
                      <div className={styles.div1} style={div1Style}>
                        3.5
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-5727.svg"
                  />
                  <div
                    className={styles.appointmentNeededTakesHourContainer}
                    style={appointmentNeededTakesHourContainerStyle}
                  >
                    <p className={styles.appointmentNeeded}>
                      Appointment needed,
                    </p>
                    <p className={styles.appointmentNeeded}>takes hours</p>
                  </div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-5727.svg"
                  />
                  <div
                    className={styles.appointmentNeededTakesHourContainer}
                    style={unreliableStyle}
                  >
                    Unreliable
                  </div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-5727.svg"
                  />
                  <div className={styles.controlPointBlack24dpWrapper}>
                    <img
                      className={styles.controlPointBlack24dpIcon}
                      alt=""
                      src="/control-point-black-24dp.svg"
                    />
                  </div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-5727.svg"
                  />
                  <div
                    className={styles.appointmentNeededTakesHourContainer}
                    style={fullPriceStyle}
                  >
                    Full Price
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameDiv}>
                  <div className={styles.publixWrapper}>
                    <div className={styles.others} style={publixStyle}>
                      Publix
                    </div>
                  </div>
                  <div className={styles.parent} style={frameDiv2Style}>
                    <div className={styles.div} style={div2Style}>
                      <span className={styles.span}>$</span>
                      <span className={styles.span1}>40</span>
                    </div>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/vector-5727.svg"
                    />
                    <div className={styles.frameWrapper1}>
                      <div className={styles.starParent}>
                        <img className={styles.frameItem} alt="" src={star11} />
                        <div className={styles.div1} style={div3Style}>
                          4.9
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/vector-5727.svg"
                    />
                    <div
                      className={styles.appointmentNeededTakesHourContainer}
                      style={onlineFormSubmissionTakesContainerStyle}
                    >
                      <p className={styles.appointmentNeeded}>
                        Online form submission,
                      </p>
                      <p className={styles.appointmentNeeded}>takes mins</p>
                    </div>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/vector-5727.svg"
                    />
                    <div
                      className={styles.appointmentNeededTakesHourContainer}
                      style={openStyle}
                    >
                      Open
                    </div>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/vector-5727.svg"
                    />
                    <div className={styles.controlPointBlack24dpWrapper}>
                      <img
                        className={styles.controlPointBlack24dpIcon}
                        alt=""
                        src="/task-alt-black-24dp.svg"
                      />
                    </div>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/vector-5727.svg"
                    />
                    <div
                      className={styles.appointmentNeededTakesHourContainer}
                      style={upTo87Style}
                    >
                      Up to 87% discount
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.visitFeeParent}>
                <div
                  className={styles.appointmentNeededTakesHourContainer}
                  style={visitFeeStyle}
                >
                  Visit Fee
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-5728.svg"
                />
                <div
                  className={styles.appointmentNeededTakesHourContainer}
                  style={ratingStyle}
                >
                  Rating
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-5728.svg"
                />
                <div
                  className={styles.appointmentNeededTakesHourContainer}
                  style={typeOfConsultationStyle}
                >
                  Type of Consultation
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-5728.svg"
                />
                <div
                  className={styles.appointmentNeededTakesHourContainer}
                  style={weekendsNightsStyle}
                >{`Weekends & Nights`}</div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-5728.svg"
                />
                <div
                  className={styles.appointmentNeededTakesHourContainer}
                  style={refundableStyle}
                >
                  Refundable?
                </div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-5728.svg"
                />
                <div
                  className={styles.appointmentNeededTakesHourContainer}
                  style={mDCostStyle}
                >
                  MD Cost
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

export default MarketComparisonContainer;
