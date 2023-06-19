import React from 'react'
import styles from './DiseaseCategoryCard.module.css'
type Props = {}

const DiseaseCategoryCard = (props: Props) => {
  return (
    <div className={styles.cardAcordion}>
        <div className={styles.divsc1fegqzc10}>
            <div className={styles.variations}>
            <div className={styles.icons}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            </div>
            <div className={styles.sexuallyTransmittedDiseases}>
            Urgent Care (Sick Visit)
            </div>
        </div>
        <img
            className={styles.svgsc1kmzbw2Icon}
            alt=""
            src="/svgsc1kmzbw21.svg"
        />
    </div>
  )
}

export default DiseaseCategoryCard