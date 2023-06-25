import React from 'react'
import styles from "./ProductSearchSection.module.css";
import ContainerGrid from './CardRightDetails';
type Props = {}

const CardSection = (props: Props) => {
  return (
    <>
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
    </>
  )
}

export default CardSection