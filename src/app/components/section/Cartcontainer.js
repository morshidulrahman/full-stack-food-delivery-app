import React from 'react'
import {MdKeyboardBackspace} from "react-icons/md"
import {motion} from "framer-motion"
function Cartcontainer() {
  return (
    <div className='w-[375px] bg-white top-0 right-0 z-50  drop-shadow-xl flex flex-col fixed h-screen'>
        <div className='flex items-center justify-between p-4 cursor-pointer'>
          <motion.div
          whileTap={{scale:0.75}}
          >
          <MdKeyboardBackspace className='text-3xl text-textcolor'/>
          </motion.div>
          <p className='text-lg font-semibold text-textcolor'>cart</p>
          <motion.p
          whileTap={{scale:0.75}}
          className="text-textcolor bg-gray-100 px-4 py-1 rounded-md hover:shadow-md duration-100 transition-all ease-in-out cursor-pointer text-base"
          >clear</motion.p>
        </div>
        <div className='w-full bg-cartBg rounded-t-[2rem] h-full flex flex-col'>
            <div className='w-full px-6 py-10 h-340 md:h-42 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
             <div className='w-full p-1 px-2 bg-cartItem flex items-center gap-2 rounded-full object-contain'>
                <img
                className='w-20 h-20 rounded-md ' 
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-d012f.appspot.com/o/images%2F1661537104367-f9.png?alt=media&token=278fef53-d7e9-42f6-b4d5-d0e0de04bff0" alt="dd" />
             </div>
            </div>
        </div>
    </div>
  )
}

export default Cartcontainer