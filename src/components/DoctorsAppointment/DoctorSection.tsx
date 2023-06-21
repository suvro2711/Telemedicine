import { FunctionComponent, memo, useState } from "react";
import styles from "./DoctorSection.module.css";
import DiseaseCategoryCard from "./DiseaseCategoryCard";
import { diseaseListIntial } from "./initialDiseaseData";

export interface DiseaseCategory{
  name:string
  iconPath?:string
  isSelected?:boolean
  diseases?:string[]
}

const DoctorSection: FunctionComponent = () => {
  
  const [diseaseCategoryList, setDiseaseCategoryList] = useState<DiseaseCategory[]>(diseaseListIntial)

  const shrikantsSuggsion = (diseaseName:string) => {
    const newDiseaseList:DiseaseCategory[] = diseaseCategoryList.map(disease => !(disease.name === diseaseName) ? {...disease, isSelected: false} : {...disease, isSelected:true})
    setDiseaseCategoryList(newDiseaseList)
    console.log(newDiseaseList)
  }

  const originalSuggetion = (diseaseCategoryName:string) => {
    const filterDisease = (partialDiseaseCategory: ({
      isSelected?: boolean| undefined;
      name?: string | undefined;
      iconPath?: string | undefined;
      diseases?: string[] | undefined;
    })[]):DiseaseCategory[] =>{
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
    const smallWebScreenWidthThreshold = 1896
    const needToPutSelectedAtFirst = window.innerWidth < smallWebScreenWidthThreshold
    if(needToPutSelectedAtFirst){
      const selectDisease = diseaseCategoryList.find(disease => disease.name === diseaseCategoryName) 
      const restOfTheDisease:DiseaseCategory[] = diseaseCategoryList.map(disease => !(disease.name === diseaseCategoryName) ? {...disease, isSelected: false} : {name:""})
      const filteredDisease:DiseaseCategory[] = restOfTheDisease.filter(disease => disease.name)
      const arrangedDiseaseList = needToPutSelectedAtFirst && selectDisease  ?   [  ...filteredDisease, {...selectDisease, isSelected:true}] :[ {...selectDisease, isSelected:true}, ...filteredDisease]
      const newDiseaseList:DiseaseCategory[] = selectDisease ? filterDisease(arrangedDiseaseList): []
      setDiseaseCategoryList(newDiseaseList)
    }else{
      const newDiseaseList:DiseaseCategory[] = diseaseCategoryList.map(disease => !(disease.name === diseaseCategoryName) ? {...disease, isSelected: false} : {...disease, isSelected:true})
      setDiseaseCategoryList(newDiseaseList)
    }
  }

  const selectDiseaseCategory = diseaseCategoryList.find(disease => disease.isSelected)
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
        <div className={styles.cardAcordionParent}>
          {
            diseaseCategoryList.map(diseaseCategory => <DiseaseCategoryCard  
              key={diseaseCategory.name}
              disease={diseaseCategory}
              selectDisease={originalSuggetion}
            />)
          }
        </div>
        <div className={styles.filter}>
          <div className={styles.selectParent}>
            {selectDiseaseCategory?.diseases?.length && selectDiseaseCategory?.diseases?.length > 0 &&
               selectDiseaseCategory?.diseases.map(disease => <div className={styles.select}>
                <div className={styles.text}>{disease}</div>
              </div>)
            }
        </div> 
      </div>
    </div>
    </div> 
  )

}


export default DoctorSection;
