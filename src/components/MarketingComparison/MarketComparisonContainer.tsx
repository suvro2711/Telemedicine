import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MarketComparisonContainer.module.css";


const MarketComparisonSection: FunctionComponent =memo(() => {

      return (
        <section className={styles.marketComparison}>
          <div className={styles.text}>
            <div className={styles.title}>
              <div className={styles.titleSubWrapper}>Publix vs. Others</div>
            </div>
            <div className={styles.subTitle}>
            "Don’t wait weeks for an appointment. Our doctors, therapists, and specialists can help you with the flu, infections, anxiety, stress, skin conditions, and provide advice on serious medical conditions. No matter what you're facing, we’re available from wherever you are by phone, video, or app."
            </div>
          </div>
          <div className={styles.comparison}>
            <div className={styles.others}>
              <div className={styles.frameDiv}>
                <div className={styles.othersWrapper}>
                  <div className={styles.others} >
                    Others
                  </div>
                </div>
                <div className={styles.parent} >
                  <div className={styles.div} >
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
                      <img className={styles.frameItem} alt=""  src='/star-11.svg'/>
                      <div className={styles.div1} >
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
                    
                  >
                    Unreliable
                  </div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-5727.svg"
                  />
                  <div className={styles.controlPoint}>
                    <img
                      className={styles.controlPointIcon}
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
                   
                  >
                    Full Price
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.publix}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameDiv}>
                  <div className={styles.publixWrapper}>
                    <div className={styles.others} >
                      Publix
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div} >
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
                        <img className={styles.frameItem} alt="" src={'/star-11.svg'} />
                        <div className={styles.div1}>
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
                    >
                      Open
                    </div>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/vector-5727.svg"
                    />
                    <div className={styles.controlPoint}>
                      <img
                        className={styles.controlPointIcon}
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
                    >
                      Up to 87% discount
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.visitFeeParent}>
                <div
                  className={styles.appointmentNeededTakesHourContainer}
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
                >{`Weekends & Nights`}</div>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-5728.svg"
                />
                <div
                  className={styles.appointmentNeededTakesHourContainer}
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
                >
                  MD Cost
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  );

export default MarketComparisonSection;
