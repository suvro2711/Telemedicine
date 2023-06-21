import { DiseaseCategory } from "./DoctorSection";

export const diseaseListIntial:DiseaseCategory[] = [
    {
      name:"Sick Visit", 
      iconPath:"/vector.svg",
      diseases:[
        "Acute Bronchitis",
        "Ear Infection",
        "Nausea /Vomiting",
        "Phone Consult",
        "Stye",
        "Allergies",
        "Flu (Influenza)",
        "Oral Herpes (Cold Sore)",
        "Pink Eye",
        "Thrush (Oral)",
        "COVID-19 Rx (Paxlovid)",
        "Migraine Relief",
        "Pain Relief",
        "Sinus Infection",
        "URI-Respiratory Infection",
        "Dental Infection",
        "Motion Sickness",
        "Pediatric",
        "Strep Throat",
        "UTI",
      ]
    },
    { 
      name:"Sexually Transmitted Diseases", 
      iconPath:"/group-411.svg",
      diseases: [
        "HIV/AIDS",
        "Chlamydia",
        "Gonorrhea",
        "Syphilis",
        "Genital Herpes",
        "HPV Infection",
        "Trichomoniasis",
        "Hepatitis B",
        "Hepatitis C",
        "Pubic Lice (Crabs)"
      ]
    },
    {
      name:"Men's Health", 
      iconPath:"/group-233.svg",
      diseases: [
        "Erectile Dysfunction",
        "Prostate Cancer",
        "Testicular Cancer",
        "Benign Prostatic Hyperplasia (BPH)",
        "Premature Ejaculation",
        "Male Infertility",
        "Low Testosterone",
        "Penile Conditions",
        "Varicocele",
        "Priapism"
      ]
    },
    {
      name:"Women's Health", 
      iconPath:"/group-232.svg",
      diseases:[
        "Breast Cancer",
        "Ovarian Cancer",
        "Cervical Cancer",
        "Endometriosis",
        "Polycystic Ovary Syndrome (PCOS)",
        "Urinary Tract Infection (UTI)",
        "Menopause",
        "Pelvic Inflammatory Disease (PID)",
        "Fibroids",
        "Yeast Infection"
      ]
    },
    {name:"Psychiatry", iconPath:"/group-421.svg"},
    {name:"Chronic Medical Conditions", iconPath:"/group-401.svg"},
    {name:"Dermatology", iconPath:"/group-181.svg"},
    {name:"Miscellaneous Health", iconPath:"/group-391.svg"},
    {name:"Online prescription refill", iconPath:"/group-31.svg"}
  ]