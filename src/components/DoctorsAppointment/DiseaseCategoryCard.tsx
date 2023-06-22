import React, { Dispatch, SetStateAction } from 'react'
import styles from './DiseaseCategoryCard.module.css'
import { DiseaseCategory } from './DoctorSection'
import { isWindowWithSmaller } from '../../utils'
import { mediaSizes } from '../../constants'

type DiseaseCategoryCardProps = {
  disease:DiseaseCategory
  selectDisease: (diseaseName: string) => void
  setShowCategories: Dispatch<SetStateAction<boolean>>
  usSelectDisease:()=>void
  showCategories:boolean
}

const DiseaseCategoryCard = ({disease, selectDisease, showCategories, setShowCategories, usSelectDisease}: DiseaseCategoryCardProps) => { 

  const getNormalCardDisplayType = ():'flex'|'block'|'none' => {
    const isItASmallScreen = isWindowWithSmaller(mediaSizes.small)
    return isItASmallScreen && !showCategories && !disease.isSelected ? 'none' : 'flex'
  }

  const onDiseaseSelect = () => {
    const isItASmallScreen = isWindowWithSmaller(mediaSizes.small)
    selectDisease(disease.name)
    isItASmallScreen && setShowCategories(false)
  }

  const onBackButtonClicked = (e:React.MouseEvent) => {
    e.stopPropagation()
    setShowCategories(true)
    usSelectDisease()
  }

  return (
    <div className={disease.isSelected ? styles.selectedCard : styles.normalCard} 
      style={{display:getNormalCardDisplayType()}}
      onClick={() => onDiseaseSelect()}
    >
      <div
        onClick={onBackButtonClicked}
      >
        <img
          className={styles.arrowReverseSVG}
          src={"/whiteLeftArrow.svg"}
        />
      </div>
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
        className={styles.arrowSVG}
        src={disease.isSelected ? "/whiteDownArrow.svg" : "/greenRightArrow.svg"}
      />
    </div>
  )
}

export default DiseaseCategoryCard