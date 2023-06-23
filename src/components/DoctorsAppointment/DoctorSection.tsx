import { Dispatch, FunctionComponent, SetStateAction, memo, useState } from "react";
import styles from "./DoctorSection.module.css";
import DiseaseCategoryCard from "./DiseaseCategoryCard";
import { diseaseListIntial } from "./initialDiseaseData";
import { isWindowWithSmaller } from "../../utils";
import { mediaSizes } from "../../constants";

export interface DiseaseCategory{
  name:string
  iconPath?:string
  isSelected?:boolean
  diseases:string[]
}

const DoctorSection: FunctionComponent = () => {
  
  const [diseaseCategoryList, setDiseaseCategoryList] = useState<DiseaseCategory[]>(diseaseListIntial)
  const [showCategories, setShowCategories] = useState<boolean>(true)
  const {selectDiseaseCategory, selectedCategoryHasContent} = getSelectedCategory(diseaseCategoryList)
  const isItASmallScreen = isWindowWithSmaller(mediaSizes.small)
  
  const selectDisease = (
    diseaseCategoryName:string, 
    diseaseCategoryList:DiseaseCategory[], 
    setDiseaseCategoryList:Dispatch<SetStateAction<DiseaseCategory[]>>
  ) => {
    const newDiseaseList = arrangeAndFilterDiseaseCategory(diseaseCategoryName, diseaseCategoryList)
    setDiseaseCategoryList(newDiseaseList)
  }

  const usSelectDisease = () => {
    const newDiseaseList = diseaseCategoryList.map(diseaseCategory => ({...diseaseCategory, isSelected:false}))
    setDiseaseCategoryList(newDiseaseList)
  }

  const showDiseaseList = selectedCategoryHasContent &&  (showCategories !== isItASmallScreen)
  return (
    <div className={styles.frameParent}>
      <div
        className={styles.theDoctorWillSeeYouNowParent}
        data-scroll-to="frameContainer"
      >
        <div className={styles.theDoctorWill}>The Doctor Will See You Now</div>
        <div className={styles.chooseFromThousands}>
          Choose from thousands of high-quality providers accepting patients
          today. Select your appointment type below.
        </div>
      </div>
      <div className={styles.prototypeUserSurvey}>
        <div 
        className={styles.cardAcordionParent} 
        style={{gridTemplateColumns:showCategories?'1fr 1fr':'1fr'}}
        >
          {
            diseaseCategoryList.map(diseaseCategory => <DiseaseCategoryCard 
              setShowCategories={setShowCategories} 
              usSelectDisease={usSelectDisease}
              showCategories={showCategories}
              key={diseaseCategory.name}
              disease={diseaseCategory}
              selectDisease={(diseaseCategoryName) => selectDisease(diseaseCategoryName, diseaseCategoryList, setDiseaseCategoryList)}
            />)
          }
        </div>
        <div className={styles.filter}>
          <div className={styles.selectParent}>
            {showDiseaseList ?
               selectDiseaseCategory?.diseases.map(disease => <div className={`${styles.select} headShake`} key={disease}>
                <div className={styles.text}>{disease}</div>
              </div>) : <div />
            }
        </div> 
      </div>
    </div>
    </div> 
  )

}

export default DoctorSection;





const getSelectedCategory = (diseaseCategoryList:DiseaseCategory[]):{selectDiseaseCategory:DiseaseCategory, selectedCategoryHasContent:boolean} => {
  const selectDiseaseCategory = diseaseCategoryList.find(disease => disease.isSelected)
  const selectedCategoryHasContent = selectDiseaseCategory?.diseases?.length && selectDiseaseCategory?.diseases?.length > 0
  if(selectDiseaseCategory && selectedCategoryHasContent){
    return({selectDiseaseCategory, selectedCategoryHasContent})
  }
  return({selectDiseaseCategory:{} as DiseaseCategory, selectedCategoryHasContent:false})
}

function isScreenIsLarge():boolean{
  const smallWebScreenWidthThreshold = 1896
  const screenIsNotLarge = window.innerWidth > smallWebScreenWidthThreshold
  return screenIsNotLarge ? false : true
}

function filterDisease (partialDiseaseCategory: ({
  isSelected?: boolean| undefined;
  name?: string | undefined;
  iconPath?: string | undefined;
  diseases?: string[] | undefined;
})[]):DiseaseCategory[] {
  const filteredDiseaseCategory= partialDiseaseCategory.map((diseaseCategory)=>{
    if(diseaseCategory.name){
      return({
        name:diseaseCategory.name,
        iconPath:diseaseCategory.iconPath??"",
        isSelected:diseaseCategory.isSelected??false,
        diseases:diseaseCategory.diseases || []
      })
    }
  }).filter(disease => disease != undefined) as DiseaseCategory[]
  return  filteredDiseaseCategory
}

function arrangeAndFilterDiseaseCategory (
    diseaseCategoryName:string, 
    diseaseCategoryList:DiseaseCategory[], 
  ):DiseaseCategory[]{
  const needToPutSelectedAtFirst = isScreenIsLarge()
  if(needToPutSelectedAtFirst){
    const selectDisease = diseaseCategoryList.find(disease => disease.name === diseaseCategoryName) 
    const restOfTheDisease:DiseaseCategory[] = diseaseCategoryList.map(disease => !(disease.name === diseaseCategoryName) ? {...disease, isSelected: false} : {name:"", diseases:[]})
    const filteredDisease:DiseaseCategory[] = restOfTheDisease.filter(disease => disease.name)
    const arrangedDiseaseList = needToPutSelectedAtFirst && selectDisease  ?   [  ...filteredDisease, {...selectDisease, isSelected:true}] :[ {...selectDisease, isSelected:true}, ...filteredDisease]
    return selectDisease ? filterDisease(arrangedDiseaseList): []
  }
  return diseaseCategoryList.map(disease => !(disease.name === diseaseCategoryName) ? 
      {...disease, isSelected: false} : 
      {...disease, isSelected:true})
}