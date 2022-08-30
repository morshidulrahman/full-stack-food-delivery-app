import React from 'react'
import { MdKeyboardBackspace } from "react-icons/md"
import { BiMinus } from "react-icons/bi"
import { BsPlus } from "react-icons/bs"
import { motion } from "framer-motion"
function Cartcontainer() {
  return (
    <div className='w-[375px] bg-white top-0 right-0 z-50  drop-shadow-xl flex flex-col fixed h-screen'>
      <div className='flex items-center justify-between p-4 cursor-pointer'>
        <motion.div
          whileTap={{ scale: 0.75 }}
        >
          <MdKeyboardBackspace className='text-3xl text-textcolor' />
        </motion.div>
        <p className='text-lg font-semibold text-textcolor'>cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="text-textcolor bg-gray-100 px-4 py-1 rounded-md hover:shadow-md duration-100 transition-all ease-in-out cursor-pointer text-base"
        >clear</motion.p>
      </div>
      <div className='w-full bg-cartBg rounded-t-[2rem] h-full flex flex-col'>
        <div className='w-full px-6 py-10 h-340 md:h-42 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>

          <div className='w-full p-1 px-2 bg-cartItem flex items-center gap-2 rounded-lg  '>
            <img
              className='w-20 h-20 rounded-full object-contain'
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-d012f.appspot.com/o/images%2F1661537104367-f9.png?alt=media&token=278fef53-d7e9-42f6-b4d5-d0e0de04bff0" alt="dd" />
            <div className='flex flex-col gap-2'>
              <p className='text-gray-50 text-base capitalize'>choclate vanila</p>
              <span className='text-gray-300 block font-semibold'>$ 8.5</span>
            </div>
            <div className='ml-auto flex items-center group gap-2 cursor-pointer'>
              <motion.div whileTap={{ scale: 0.6 }}>
                <BiMinus className='text-gray-50' />
              </motion.div>
              <p className='w-5 h-5 items-center bg-cartBg text-white flex justify-center'>1</p>
              <motion.div whileTap={{ scale: 0.6 }}>
                <BsPlus className='text-gray-50' />
              </motion.div>
            </div>
          </div>

          <div className='w-full p-1 px-2 bg-cartItem flex items-center gap-2 rounded-lg  '>
            <img
              className='w-20 h-20 rounded-full object-contain'
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-d012f.appspot.com/o/images%2F1661537104367-f9.png?alt=media&token=278fef53-d7e9-42f6-b4d5-d0e0de04bff0" alt="dd" />
            <div className='flex flex-col gap-2'>
              <p className='text-gray-50 text-base capitalize'>choclate vanila</p>
              <span className='text-gray-300 block font-semibold'>$ 8.5</span>
            </div>
            <div className='ml-auto flex items-center group gap-2 cursor-pointer'>
              <motion.div whileTap={{ scale: 0.6 }}>
                <BiMinus className='text-gray-50' />
              </motion.div>
              <p className='w-5 h-5 items-center bg-cartBg text-white flex justify-center'>1</p>
              <motion.div whileTap={{ scale: 0.6 }}>
                <BsPlus className='text-gray-50' />
              </motion.div>
            </div>
          </div>


          <div className='w-full p-1 px-2 bg-cartItem flex items-center gap-2 rounded-lg  '>
            <img
              className='w-20 h-20 rounded-full object-contain'
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-d012f.appspot.com/o/images%2F1661537104367-f9.png?alt=media&token=278fef53-d7e9-42f6-b4d5-d0e0de04bff0" alt="dd" />
            <div className='flex flex-col gap-2'>
              <p className='text-gray-50 text-base capitalize'>choclate vanila</p>
              <span className='text-gray-300 block font-semibold'>$ 8.5</span>
            </div>
            <div className='ml-auto flex items-center group gap-2 cursor-pointer'>
              <motion.div whileTap={{ scale: 0.6 }}>
                <BiMinus className='text-gray-50' />
              </motion.div>
              <p className='w-5 h-5 items-center bg-cartBg text-white flex justify-center'>1</p>
              <motion.div whileTap={{ scale: 0.6 }}>
                <BsPlus className='text-gray-50' />
              </motion.div>
            </div>
          </div>


          <div className='w-full p-1 px-2 bg-cartItem flex items-center gap-2 rounded-lg  '>
            <img
              className='w-20 h-20 rounded-full object-contain'
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-d012f.appspot.com/o/images%2F1661537104367-f9.png?alt=media&token=278fef53-d7e9-42f6-b4d5-d0e0de04bff0" alt="dd" />
            <div className='flex flex-col gap-2'>
              <p className='text-gray-50 text-base capitalize'>choclate vanila</p>
              <span className='text-gray-300 block font-semibold'>$ 8.5</span>
            </div>
            <div className='ml-auto flex items-center group gap-2 cursor-pointer'>
              <motion.div whileTap={{ scale: 0.6 }}>
                <BiMinus className='text-gray-50' />
              </motion.div>
              <p className='w-5 h-5 items-center bg-cartBg text-white flex justify-center'>1</p>
              <motion.div whileTap={{ scale: 0.6 }}>
                <BsPlus className='text-gray-50' />
              </motion.div>
            </div>
          </div>

        </div>

        {/* cart bottom section */}
        <div className='w-full bg-cartTotal rounded-t-[2rem] h-full flex flex-col justify-evenly px-8 py-2'>

          <div className='flex w-full justify-between items-center'>
            <p className='text-lg text-gray-400 capitalize'>sub total</p>
            <p className='text-lg text-gray-400 capitalize'>$ 8.5</p>
          </div>

          <div className='flex w-full justify-between items-center'>
            <p className='text-lg text-gray-400 capitalize'>delivery</p>
            <p className='text-lg text-gray-400 capitalize'>$ 8.5</p>
          </div>

          <div className='border-b border-b-gray-600 w-full my-2'></div>

          <div className='flex w-full justify-between items-center'>
            <p className='text-lg text-gray-200 capitalize'>total</p>
            <p className='text-lg text-gray-200 capitalize'>$ 8.5</p>
          </div>

          <motion.button
            whileTap={{ scale: 0.6 }}
            type="button"
            className='mx-auto w-full  py-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white cursor-pointer capitalize hover:shadow-lg'>
            check out
          </motion.button>

        </div>
      </div>


    </div>
  )
}

export default Cartcontainer