import React from 'react'
import styles from "./MaskGroup.module.css";
import MaskGroup from './MaskGroup';
type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className={styles.landingPageWrapper}>
        <MaskGroup />
    </div>
  )
}

export default LandingPage