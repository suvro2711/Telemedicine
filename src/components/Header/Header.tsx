import React from 'react'
import styles from "./Header.module.css";
import LogoLink from '../common/LogoLink/LogoLink';
type Props = {}

const Header = (props: Props) => {
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
  </div>
  )
}

export default Header