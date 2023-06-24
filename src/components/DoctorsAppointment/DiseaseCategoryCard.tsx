import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
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

  const [cardStyle, setCardStyle] = useState(normalCardStyle)

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

  useEffect(() => {
    if(disease.isSelected){
      setCardStyle(selectedCardStyle)
    }else{
      setCardStyle(normalCardStyle)
    }
  },[disease.isSelected])

  return (
    <div className={cardStyle.card} 
      style={{display:getNormalCardDisplayType()}}
      onClick={() => onDiseaseSelect()}
      onMouseOver={() => !disease.isSelected && setCardStyle(selectedCardStyle)}
      onMouseLeave={() => !disease.isSelected && setCardStyle(normalCardStyle)}
    >
      {disease.isSelected && <div
        onClick={onBackButtonClicked}
      >
        <img
          className={styles.arrowReverseSVG}
          src={"/whiteLeftArrow.svg"}
        />
      </div>}
      <div className={styles.diseaseInfo}>
        <div className={styles.diseaseIconWrapper}>
          <div className={styles.icons}>
            <img
              className={styles.groupIcon}
              src={`${cardStyle.diseaseIconColor}/${disease.iconPath}`}
            />
          </div>
        </div>
        <div className={styles.diseaseName}>
          {disease.name}
        </div>
      </div>
      <img
        className={styles.arrowSVG}
        src={`/${cardStyle.diseaseArrowColor}.svg`}
      />
    </div>
  )
}

export default DiseaseCategoryCard

const normalCardStyle = {
  card:styles.normalCard,
  diseaseIconColor:"diseaseIconGreen",
  diseaseArrowColor:"greenRightArrow"
}

const selectedCardStyle = {
  card:styles.selectedCard,
  diseaseIconColor:"diseaseIconWhite",
  diseaseArrowColor:"whiteDownArrow"
}

const hoverCardStyle = {
  card:styles.hoverCard,
  diseaseIconColor:"diseaseIconWhite",
  diseaseArrowColor:"whiteDownArrow"
}