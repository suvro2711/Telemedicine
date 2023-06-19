import { FunctionComponent } from "react";
import ProductSearchSection from "../components/ProductSearchSection";
import DoctorSection from "../components/DoctorsAppointment/DoctorSection";
import MarketComparisonContainer from "../components/market-comparison-container";
import TelehealthContainer from "../components/telehealth-container";
import styles from "./MaskGroup.module.css";
import Container from '@mui/material/Container';
import { useCommonStyles } from "../MaterialUIStyles";
import Header from "../components/Header/Header";

const MaskGroup: FunctionComponent = () => {
  const commonStyle = useCommonStyles()
  return (
    <>
    <div className={styles.subWapper}>
          <Header />
          <ProductSearchSection />
           <DoctorSection />
          <MarketComparisonContainer
            dolorEgestasUllamcorperNi="Don’t wait weeks for an appointment. Our doctors, therapists, and specialists can help you with the flu, infections, anxiety, stress, skin conditions, and provide advice on serious medical conditions. No matter what you're facing, we’re available from wherever you are by phone, video, or app."
            star1="/star-1110.svg"
            star11="/star-1110.svg"
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
          <div className={styles.frameWrapper}>
            <div className={styles.ourPatientsLoveUsParent}>
              <div className={styles.ourPatientsLove}>Our Patients Love Us</div>
              <div className={styles.groupWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.starParent}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/star-127.svg"
                        />
                        <div className={styles.div}>5.0</div>
                      </div>
                      <div className={styles.iHadA}>
                        "I had a UTI consult through this platform, and I
                        couldn't be happier with the experience. The doctor was
                        very knowledgeable and took the time to address my
                        concerns."
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/ellipse-126@2x.png"
                        />
                        <div className={styles.jennaR}>Jenna R.</div>
                      </div>
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.starParent}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/star-127.svg"
                        />
                        <div className={styles.div}>5.0</div>
                      </div>
                      <div className={styles.iHadA}>
                        “As someone without insurance, knowing the upfront cost
                        made it possible for me to afford my doctor's
                        appointment. I didn't have to worry about receiving a
                        massive bill later on."
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/ellipse-127@2x.png"
                        />
                        <div className={styles.jennaR}>Alex F.</div>
                      </div>
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.starParent}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/star-127.svg"
                        />
                        <div className={styles.div}>5.0</div>
                      </div>
                      <div className={styles.iHadA}>
                        “My experience with this platform exceeded all
                        expectations. I found the perfect doctor for my needs,
                        booked an appointment within minutes, and received
                        exceptional care." 
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/ellipse-128@2x.png"
                        />
                        <div className={styles.jennaR}>Michelle W.</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.groupItem} />
                    <div className={styles.groupInner} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.groupChild1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.ourPatientsLoveUsParent}>
              <div className={styles.connectWithTheTypeOfProviWrapper}>
                <div className={styles.connectWithThe}>
                  Connect With the Type of Provider You Need
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent4}>
                  <div className={styles.layer1Parent}>
                    <img
                      className={styles.layer1Icon}
                      alt=""
                      src="/layer-14.svg"
                    />
                    <div className={styles.urgentCare}>Urgent Care</div>
                    <div className={styles.treatmentForAllergiesEarIParent}>
                      <div className={styles.treatmentForAllergies}>
                        Treatment for allergies, ear infections, UTIs, sinus
                        infections and more.
                      </div>
                      <div className={styles.iHadA}>Starting at $19</div>
                      <div className={styles.bookNowWrapper}>
                        <div className={styles.bookNow}>Book now</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.layer1Parent}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-19.svg"
                    />
                    <div className={styles.treatmentForAllergiesEarIParent}>
                      <div className={styles.urgentCare}>Dermatology</div>
                      <div className={styles.treatmentForAllergies}>
                        Assess and treat rashes, acne, early signs of aging,
                        suspicious moles and more.
                      </div>
                      <div className={styles.iHadA}>Starting at $34</div>
                      <div className={styles.bookNowWrapper}>
                        <div className={styles.bookNow}>Book now</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.layer1Parent}>
                    <img
                      className={styles.frameChild2}
                      alt=""
                      src="/group-21.svg"
                    />
                    <div className={styles.womensHealthParent}>
                      <div className={styles.urgentCare}>Women’s Health</div>
                      <div className={styles.treatmentForAllergies}>
                        Get help for common women’s health concerns, including
                        UTIs, yeast infections, birth control refills, IUD
                        consults and STI screening.
                      </div>
                      <div className={styles.iHadA}>Starting at $50</div>
                      <div className={styles.bookNowWrapper}>
                        <div className={styles.bookNow}>Book now</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.layer1Parent}>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="/group-234.svg"
                    />
                    <div className={styles.mensHealthParent}>
                      <div className={styles.urgentCare}>Men’s Health</div>
                      <div className={styles.iHadA}>
                        Talk to a doctor about erectile dysfunction, hair loss,
                        STI screening, nutritional counseling and other common
                        men’s health concerns.
                      </div>
                      <div className={styles.iHadA}>Starting at $50</div>
                      <div className={styles.bookNowWrapper}>
                        <div className={styles.bookNow}>Book now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TelehealthContainer
            publixBrandmarksvg="/publix-brandmarksvg21.svg"
            telehealthDisplay="inline-block"
            onlinePrescriptionRefillDisplay="inline-block"
            inPersonDoctorVisitDisplay="inline-block"
            eDConsultDisplay="inline-block"
            mentalHealthConsultDisplay="inline-block"
            uTIConsultDisplay="inline-block"
            urgentCareConsultDisplay="inline-block"
            publixAllRightsReservedDisplay="inline-block"
            privacyPolicyDisclaimerTeDisplay="inline-block"
          /> 
    </div>
    </>
  );
};

export default MaskGroup;
