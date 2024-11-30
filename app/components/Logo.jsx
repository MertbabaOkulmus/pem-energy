import React from 'react'
import huaweı from "../assets/huaweı.png";
import abax from "../assets/abax.png";
import noks from "../assets/noks.png";
import Image from 'next/image';

function Logo() {
  return (
    <>
       <Image src={huaweı} width={251} height={51} />
        <Image src={abax} width={251} height={51} />
        <Image src={noks} width={251} height={51} />
    </>
  )
}

export default Logo;
