import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import {Rawcontainer,HomeContainer,Menucontainer,Cartcontainer} from "../section"
import { MdOutlineChevronLeft,MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Usestatevalue } from '../../context/StateProvider';
function MainContainer() {
  const[scrollvalue,setscrollvalue]=useState(0)
  const[{fooditems,dispatch}]=Usestatevalue()
  
   useEffect(()=>{},[scrollvalue])
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center'>
      <HomeContainer/>
      <section className='w-full'>
       <div className='flex w-full items-center justify-between'>
        <p
        className='text-3xl text-headingcolor font-semibold capitalize relative before:content-[""] before:absolute before:w-32 before:h-1 before:bg-orange-500 before:rounded-full before:-bottom-2 before:left-0' 
        >
          our fresh & healthy fruits
        </p>
        <div className='flex items-center gap-3'>
           <motion.div 
            onClick={()=>setscrollvalue(-200)} 
           whileTap={{scale:0.75}}
           className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 duration-200 transition-all ease-in-out flex items-center justify-center'>
           <MdOutlineChevronLeft className="text-white text-xl"/>
           </motion.div>
           <motion.div
           onClick={()=>setscrollvalue(200)} 
           whileTap={{scale:0.75}}
           className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 duration-200 transition-all ease-in-out flex items-center justify-center'>
            <MdOutlineKeyboardArrowRight className="text-white text-xl"/>
           </motion.div>
        </div>
       </div>
       <Rawcontainer flag={true}  data={fooditems?.filter(n=>n.categroy==='fruits') } scrollvalue={scrollvalue}/>
      </section>
      <Menucontainer/>
      <Cartcontainer/>
    </div>
  )
}

export default MainContainer

