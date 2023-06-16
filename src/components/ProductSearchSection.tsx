import { FunctionComponent, memo, useCallback } from "react";
import ContainerGrid from "./ContainerGrid";
import styles from "./ProductSearchSection.module.css";
import { Container } from "@mui/material";
import LogoLink from "./common/LogoLink/LogoLink";

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
        <div className={styles.publixHeader}>
          <div className={styles.divnavigationBarSecondary}>
            <div className={styles.ulsecondaryNavigation}>
              <b className={styles.catering}>Catering</b>
              <b className={styles.giftCards}>Gift Cards</b>
              <b className={styles.orderSushi}>Order Sushi</b>
              <b className={styles.orderSubs}>Order Subs</b>
              <b className={styles.weeklyAd}>Weekly Ad</b>
              <b className={styles.pharmacy}>Pharmacy</b>
            </div>
          </div>
          <div className={styles.divnavigationBarMain}>
            <LogoLink />
            <div className={styles.divnavigation}>
              <div className={styles.divnavigationSection}>
                <div className={styles.formpSearchInput}>
                  <input className={styles.searchProductsAndMore} placeholder="Search products and more"/>
                  <img className={styles.svgIcon} alt="" src="/svg.svg" />
                </div>
                <div className={styles.ulaccount}>
                  <div className={styles.itemsInShoppingList}>
                    <div className={styles.shoppingList}>Shopping list</div>
                    <img className={styles.svgIcon1} alt="" src="/svg1.svg" />
                    <div className={styles.frame} />
                  </div>
                  <div className={styles.itemsInCart}>
                    <div className={styles.shoppingList}>Cart</div>
                    <img className={styles.svgIcon2} alt="" src="/svg2.svg" />
                    <div className={styles.frame1} />
                  </div>
                  <div className={styles.logIn}>
                    <div className={styles.logIn1}>Log in</div>
                    <div className={styles.frame2} />
                  </div>
                  <div className={styles.signUp}>
                    <div className={styles.logIn1}>Sign up</div>
                    <div className={styles.frame3} />
                  </div>
                </div>
              </div>
              <div className={styles.divprimaryNavigation}>
                <div className={styles.ulnavigationMenus}>
                  <div className={styles.savings}>
                    <div className={styles.logIn1}>Savings</div>
                    <img className={styles.svgIcon3} alt="" src="/svg3.svg" />
                    <div className={styles.frame4} />
                  </div>
                  <div className={styles.orderAhead}>
                    <div className={styles.logIn1}>Order ahead</div>
                    <img className={styles.svgIcon4} alt="" src="/svg4.svg" />
                    <div className={styles.frame5} />
                  </div>
                  <div className={styles.catering1}>
                    <div className={styles.logIn1}>Catering</div>
                    <div className={styles.frame6} />
                  </div>
                  <div className={styles.deliveryCurbside}>
                    <div className={styles.logIn1}>{`Delivery & curbside`}</div>
                    <div className={styles.divimgWrapper}>
                      <img
                        className={styles.deliveryCurbsidesvgIcon}
                        alt=""
                        src="/deliverycurbsidesvg.svg"
                      />
                    </div>
                    <div className={styles.frame7} />
                  </div>
                  <div className={styles.weeklyAd1}>
                    <div className={styles.logIn1}>Weekly ad</div>
                    <div className={styles.frame8} />
                  </div>
                </div>
                <b className={styles.chooseAStore}>Choose a store</b>
              </div>
            </div>
          </div>
        </div>
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
                  svgsc1jw854g0="/svgsc1jw854g026.svg"
                  layer1="/layer-111.svg"
                  layer11="/layer-121.svg"
                  star1="/star-126.svg"
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
                      <div className={styles.groupItem} />
                      <div className={styles.memberId021916}>Member ID: 021916</div>
                      <div className={styles.bin021916}>BIN: 021916</div>
                      <div className={styles.pcn021916}>PCN: 021916</div>
                      <div className={styles.group021916}>Group: 021916</div>
                      <div className={styles.save}>Save</div>
                      <div className={styles.div}>87%</div>
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
