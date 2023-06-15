import React from 'react'

type Props = {}

const LogoLink = (props: Props) => {
  return (
    <a href="https://www.publix.com/">
        <img
            style={{width:"59px", height:"59px", margin:"2rem"}}
            alt=""
            src={"/mainlogo.svg"}
        />
    </a>
  )
}

export default LogoLink