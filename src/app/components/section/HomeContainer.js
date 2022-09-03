import React from 'react'
import Delevary from "../../img/delivery.png"
import Herobg from "../../img/heroBg.png"
import { Herodata } from '../data'
function HomeContainer() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2' id="home">
        <div className='flex flex-col flex-1 items-start justify-center md:justify-start gap-6'>
          <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100'>
            <p className='font-base text-orange-500 font-semibold capitalize'>
              bike delivery
            </p>
            <div className='w-8 h-8 overflow-hidden rounded-full bg-white'>
              <img src={Delevary} alt="delevary" className='w-full h-full object-contain' />
            </div>
          </div>

          <p className='text-[2.5rem] lg:text-[4.25rem] md:capitalize font-bold tracking-wide text-headingcolor'>
            the fastest delivery in
            <span className='text-[3rem] lg:text-[5rem] text-orange-600'>your city</span>
          </p>

          <p className='text-base text-textcolor text-center md:text-left md:w-[80%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quis mollitia adipisci deserunt cum eligendi maiores accusamus delectus, deleniti doloremque! At error, autem recusandae praesentium nesciunt laudantium explicabo libero neque?
          </p>

          <button
            type="button"
            className='md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full rounded-lg hover:shadow-lg duration-100 px-4 py-2 capitalize'>
            order now
          </button>
        </div>
        <div className='p-4 flex-1 flex items-center relative'>
          <img
            src={Herobg} alt="herobg"
            className='h-420 w-full lg:w-auto lg:h-650 ml-auto'
          />
          <div className='w-full h-full absolute top-0 left-0 py-4 lg:pr-4 xl:pr-16 flex items-center justify-center flex-wrap md:gap-3 lg:gap-5 gap-4'>

            {
              Herodata?.map(item => (
                <div className='md:w-160 lg:w-190 p-4 bg-cardOverlay rounded-2xl flex flex-col items-center justify-center backdrop-blur-md drop-shadow-lg' key={item.id}>
                  <img
                    className='lg:-mt-20 lg:w-40 w-20 -mt-10'
                    src={item.imagesrc}
                    alt="icecream" />
                  <p className='lg:text-xl text-base font-semibold text-textcolor lg:mt-4 mt-2'>{item.name}</p>
                  <p className='lg:text-sm text-lighttextgray lg:my-3 my-1 text-xs'>{item.decp}</p>
                  <p className=' text-[12px] lg:text-sm text-headingcolor'><span className='text-xs text-red-600'>$</span>{item.price}</p>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default HomeContainer