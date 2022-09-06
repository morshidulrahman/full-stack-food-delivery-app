import React, { useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { categoriesData } from "../data"
import { motion } from "framer-motion"
import { Rawcontainer } from "../section"
import { Usestatevalue } from '../../context/StateProvider';

function Menucontainer() {
  const [{ fooditems }] = Usestatevalue()
  const [filter, setfilter] = useState("chiken")
  return (
    <div className='w-full my-6' id="menu">
      <div className='w-full flex items-center justify-center flex-col'>
        <p
          className='text-3xl text-headingcolor font-semibold capitalize relative before:content-[""] before:absolute before:w-16 before:h-1 before:bg-orange-500 before:rounded-full before:-bottom-2 before:left-0 mr-auto'
        >
          our hot dishes
        </p>
        <div
          className='flex w-full items-center justify-start lg:justify-center my-8 gap-8 overflow-x-scroll scrollbar-none '>
          {
            categoriesData?.map((item, index) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={index}
                onClick={() => setfilter(item.ulparamname)}
                className={`group w-24 min-w-[90px] ${filter === item.ulparamname ? "bg-cartNumBg" : "bg-card"} h-28 rounded-lg drop-shadow-xl flex flex-col items-center justify-center duration-200 transition-all ease-in-out hover:bg-red-600`}>

                <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center group-hover:bg-white ${filter === item.ulparamname ? "bg-white" : "bg-red-600"} shadow-md`}>

                  <MdShoppingBasket className={`text-lg group-hover:text-headingcolor ${filter === item.ulparamname ? "text-headingcolor " : ""}`} />
                </div>
                <p className={`mt-2 text-sm capitalize group-hover:text-white ${filter === item.ulparamname ? "text-white" : " "}`}>{item.name}</p>
              </motion.div>
            ))
          }
        </div>
        <div className='w-full' >
          <Rawcontainer flag={false} data={fooditems?.filter(n => n.categroy === filter)} scrollvalue="200" />
        </div>
      </div>
    </div>
  )
}

export default Menucontainer