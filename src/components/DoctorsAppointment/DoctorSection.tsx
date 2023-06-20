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

  const shrikantsSuggsion = (diseaseName:string) => {
    // const selectDisease:Disease| undefined = diseaseList.find(disease => disease.name === diseaseName)
    // const restOfTheDisease:Disease[] = diseaseList.map(disease => !(disease.name === diseaseName) ? {...disease, isSelected: false} : {name:""})
    // const filteredDisease:Disease[] = restOfTheDisease.filter(disease => disease.name)
    // const newDiseaseList:Disease[] = selectDisease ? [ {...selectDisease, isSelected:true}, ...filteredDisease] : []
    const newDiseaseList:Disease[] = diseaseList.map(disease => !(disease.name === diseaseName) ? {...disease, isSelected: false} : {...disease, isSelected:true})
    setDiseaseList(newDiseaseList)
    console.log(newDiseaseList)
  }

  const originalSuggetion = (diseaseName:string) => {
    const filterDisease = (partialDisease: ({
      isSelected?: boolean| undefined;
      name?: string | undefined;
      iconPath?: string | undefined;
    })[]):Disease[] =>{
      const filteredDisease= partialDisease.map((disease)=>{
        if(disease.name){
          return({
            name:disease.name,
            iconPath:disease.iconPath??"",
            isSelected:disease.isSelected??false
          })
        }
      }).filter(disease => disease != undefined) as Disease[]
      return  filteredDisease
    }
    const smallWebScreenWidthThreshold = 1896
    const needToPutSelectedAtFirst = window.innerWidth < smallWebScreenWidthThreshold
    if(needToPutSelectedAtFirst){
      const selectDisease = diseaseList.find(disease => disease.name === diseaseName) 
      const restOfTheDisease:Disease[] = diseaseList.map(disease => !(disease.name === diseaseName) ? {...disease, isSelected: false} : {name:""})
      const filteredDisease:Disease[] = restOfTheDisease.filter(disease => disease.name)
      const arrangedDiseaseList = needToPutSelectedAtFirst && selectDisease  ?   [  ...filteredDisease, {...selectDisease, isSelected:true}] :[ {...selectDisease, isSelected:true}, ...filteredDisease]
      const newDiseaseList:Disease[] = selectDisease ? filterDisease(arrangedDiseaseList): []
      setDiseaseList(newDiseaseList)
    }else{
      const newDiseaseList:Disease[] = diseaseList.map(disease => !(disease.name === diseaseName) ? {...disease, isSelected: false} : {...disease, isSelected:true})
      setDiseaseList(newDiseaseList)
    }
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
              selectDisease={originalSuggetion}
            />)
          }
        </div>
        <div className={styles.filter}>
          <div className={styles.selectParent}>
            <div className={styles.select}>
              <div className={styles.text}>Acute Bronchitis</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Ear Infection</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Nausea /Vomiting</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Phone Consult</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Stye</div>
            </div>
          </div>
          <div className={styles.selectParent}>
            <div className={styles.select}>
              <div className={styles.text}>Allergies</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Flu (Influenza)</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Oral Herpes (Cold Sore)</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Pink Eye</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Thrush (Oral)</div>
            </div>
          </div>
          <div className={styles.selectParent}>
            <div className={styles.select}>
              <div className={styles.text}>COVID-19 Rx (Paxlovid)</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Migraine Relief</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Pain Relief</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Sinus Infection</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>URI-Respiratory Infection</div>
            </div>
          </div>
          <div className={styles.selectParent}>
            <div className={styles.select}>
              <div className={styles.text}>Dental Infection</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Motion Sickness</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Pediatric</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>Strep Throat</div>
            </div>
            <div className={styles.select}>
              <div className={styles.text}>UTI</div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )

}


export default DoctorSection;
