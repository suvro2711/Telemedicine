import React from 'react'
import styles from './DiseaseCategoryCard.module.css'
import { Disease } from './DoctorSection'

type DiseaseCategoryCardProps = {
  disease:Disease
  selectDisease: (diseaseName: string) => void
}

const DiseaseCategoryCard = ({disease, selectDisease}: DiseaseCategoryCardProps) => {

  return (
    <div className={disease.isSelected ? styles.selectedCard : styles.normalCard} 
      onClick={() => selectDisease(disease.name)}
    >
      <div className={styles.diseaseInfo}>
        <div className={styles.variations1}>
          <div className={styles.icons}>
            <img
              className={styles.groupIcon}
              src={disease.iconPath}
            />
          </div>
        </div>
        <div className={styles.diseaseName}>
          {disease.name}
        </div>
      </div>
      <img
        className={styles.svgsc1kmzbw2Icon}
        src="/svgsc1kmzbw25.svg"
      />
    </div>
  )
}

export default DiseaseCategoryCard