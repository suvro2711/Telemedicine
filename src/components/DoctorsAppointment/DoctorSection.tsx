import { FunctionComponent, memo, useState } from "react";
import styles from "./DoctorSection.module.css";
import DiseaseCategoryCard from "./DiseaseCategoryCard";
import { diseaseListIntial } from "./initialDiseaseData";

export interface Disease{
  name:string
  iconPath?:string
  isSelected?:boolean
}

const DoctorSection: FunctionComponent = () => {
  
  const [diseaseList, setDiseaseList] = useState<Disease[]>(diseaseListIntial)

  const selectDisease = (diseaseName:string) => {
    const selectDisease:Disease| undefined = diseaseList.find(disease => disease.name === diseaseName)
    const restOfTheDisease:Disease[] = diseaseList.map(disease => !(disease.name === diseaseName) ? {...disease, isSelected: false} : {name:""})
    const filteredDisease:Disease[] = restOfTheDisease.filter(disease => disease.name)
    const newDiseaseList:Disease[] = selectDisease ? [...filteredDisease, {...selectDisease, isSelected:true}] : []
    setDiseaseList(newDiseaseList)
    console.log(newDiseaseList)
  }

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
            diseaseList.map(disease => <DiseaseCategoryCard  
              key={disease.name}
              disease={disease}
              selectDisease={selectDisease}
            />)
          }
        </div>
      </div>
    </div>
  )

}


export default DoctorSection;
