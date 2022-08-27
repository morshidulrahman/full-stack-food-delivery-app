import { useEffect, useState,useRef} from 'react'
import {motion} from "framer-motion"
import { MdShoppingBasket } from 'react-icons/md';
import NOtfound from "../../img/NotFound.svg"
function Rowcontainer({flag, data,scrollvalue}) { 
   const[items,setitems]=useState("")
   const rowref=useRef()
   const[loading,setloading]=useState(false)
    useEffect(()=>{
      setloading(true)
      // rowref.current.scrollLeft  += scrollvalue
    },[scrollvalue])

   setTimeout(() => {
         setitems(data)
         setloading(false)
   },4000);

   console.log("ddd",items,loading)


  return ( 
    
    <div className={`w-full flex items-center gap-3 my-12 ${flag ? "overflow-x-scroll scrollbar-none":"overflow-x-hidden flex-wrap justify-center"} scroll-smooth`}>
      {
        loading && (
          <h1 className=' w-full flex justify-center items-center'>
            <img src={NOtfound} alt="ss" className='h-[320px]'/>
            <p className='capitalize text-lg mt-2'>items not avialble</p>
           </h1>
        )
      }
      {items && items?.map((item,index)=>(
         <div 
         ref={rowref}
         key={index}
         className="w-[275px] min-w-[300px]  md:w-[340px] md:min-w-[340px] h-auto bg-cardOverlay rounded-lg drop-shadow-lg p-4 my-12 backdrop-blur-lg hover:drop-shadow-2xl">
         <div className='flex items-center justify-between'>
           <motion.img
           whileHover={{scale:1.2}}
           className='w-40 h-40 -mt-6 drop-shadow-2xl object-contain' 
           src={item.imageURL}
           />
           <motion.div
           whileTap={{scale:0.75}}
           className='flex w-8 h-8 rounded-full bg-red-600 items-center justify-center hover:shadow-md'>
            <MdShoppingBasket className='text-white'/>
           </motion.div>
         </div>
         <div className='w-full flex flex-col justify-end items-end'>
           <p className='text-textcolor font-semibold text-base md:text-lg capitalize'>
             {item.title}
           </p>
           <p className='text-gray-400 mt-1 text-sm'>
            {item.calories}calories
           </p>
           <div className='flex items-center gap-8'>
            <p className='text-lg text-headingcolor font-semibold'>
              <span className='text-red-600 text-sm'>$</span>{item.prices}
            </p>
           </div>
         </div>
        </div>
      ))}
    </div>
  )
}

export default Rowcontainer