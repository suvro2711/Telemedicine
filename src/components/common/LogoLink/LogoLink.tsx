import React from 'react'

type Props = {}

const LogoLink = (props: Props) => {
  return (
    <a href="https://www.publix.com/">
        <img
            style={{width:"46px", height:"46px", margin:"2rem"}}
            alt=""
            src={"/mainlogo.svg"}
        />
    </a>
  )
}

export default LogoLink