import { HeroData } from "../../data/header";

import React from 'react'

function Navmneu({className}) {
  return (
    <>
      {
        HeroData?.map((item,index)=>(
            <li
            className={`text-textcolor text-base hover:text-headingcolor duration-100 transition-all ease-in-out capitalize ${className}`}
            key={index} 
            >
             {item.title}
            </li> 
        ))
      }
    </>
  )
}

export default Navmneu