import React from 'react'
import styles from './DiseaseCategoryCard.module.css'
import { DiseaseCategory } from './DoctorSection'

type DiseaseCategoryCardProps = {
  disease:DiseaseCategory
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
              src={`${disease.isSelected ? 'diseaseIconWhite':'diseaseIconGreen'}/${disease.iconPath}`}
            />
          </div>
        </div>
        <div className={styles.diseaseName}>
          {disease.name}
        </div>
      </div>
      <img
        className={styles.svgsc1kmzbw2Icon}
        src={disease.isSelected ? "/whiteDownArrow.svg" : "/greenRightArrow.svg"}
      />
    </div>
  )
}

export default DiseaseCategoryCard