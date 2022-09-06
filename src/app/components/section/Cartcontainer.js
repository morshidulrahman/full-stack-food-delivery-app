import React, { useEffect, useState, } from 'react'
import { MdKeyboardBackspace } from "react-icons/md"

import { motion } from "framer-motion"
import { Usestatevalue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'
import emptyimage from '../../img/emptyCart.svg'
import Cartitem from './Cartitem'

function Cartcontainer() {
  const [{ cartshow, cartItems, user }, dispatch] = Usestatevalue()
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const showcart = () => {
    dispatch({
      type: actionType.SET_SHOW_ITEMS,
      cartshow: !cartshow
    });
  }


  useEffect(() => {
    let totalPrice = cartItems.reduce((total, item) =>
      total + item.qty * item.prices
      , 0);
    setTot(totalPrice);
    // eslint-disable-next-line
  }, [tot, flag])



  const clearCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      className='w-[375px] bg-white top-0 right-0 z-50  drop-shadow-xl flex flex-col fixed h-screen'>
      <div className='flex items-center justify-between p-4 cursor-pointer'>
        <motion.div
          onClick={showcart}
          whileTap={{ scale: 0.75 }}
        >
          <MdKeyboardBackspace className='text-3xl text-textcolor' />
        </motion.div>
        <p className='text-lg font-semibold text-textcolor'>cart</p>
        <motion.p
          onClick={clearCart}
          whileTap={{ scale: 0.75 }}
          className="text-textcolor bg-gray-100 px-4 py-1 rounded-md hover:shadow-md duration-100 transition-all ease-in-out cursor-pointer text-base"
        >clear</motion.p>
      </div>

      {
        cartItems && cartItems.length > 0 ? (
          <div className='w-full bg-cartBg rounded-t-[2rem] h-full flex flex-col'>
            <div className='w-full px-6 py-10 h-[500px] md:h-42 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
              {
                cartItems && cartItems.map((item, index) => (
                  <Cartitem
                    key={index}
                    item={item}
                    setFlag={setFlag}
                    flag={flag} />
                ))
              }
            </div>

            {/* cart bottom section */}

            <div className='w-full bg-cartTotal rounded-t-[2rem] h-full flex flex-col justify-evenly px-8 py-2'>

              <div className='flex w-full justify-between items-center'>
                <p className='text-lg text-gray-400 capitalize'>sub total</p>
                <p className='text-lg text-gray-400 capitalize'>$ {Math.floor(tot)}</p>
              </div>

              <div className='flex w-full justify-between items-center'>
                <p className='text-lg text-gray-400 capitalize'>delivery</p>
                <p className='text-lg text-gray-400 capitalize'>$ 8.5</p>
              </div>

              <div className='border-b border-b-gray-600 w-full my-2'></div>

              <div className='flex w-full justify-between items-center'>
                <p className='text-lg text-gray-200 capitalize'>total</p>
                <p className='text-lg text-gray-200 capitalize'>$ {Math.floor(tot + 2.5)}</p>
              </div>
              {
                user ? (
                  <motion.button
                    whileTap={{ scale: 0.6 }}
                    type="button"
                    className='mx-auto w-full  py-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white cursor-pointer capitalize hover:shadow-lg'>
                    check out
                  </motion.button>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.6 }}
                    type="button"
                    className='mx-auto w-full  py-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-white cursor-pointer capitalize hover:shadow-lg'>
                    login to checkout
                  </motion.button>
                )
              }
            </div>
          </div>

        ) : (
          <div className='w-full h-full flex-col flex justify-center items-center gap-6'>
            <img src={emptyimage} alt="empty" className='w-300' />
            <p className='text-textcolor font-semibold text-xl capitalize'>add some items to your cart</p>
          </div>
        )
      }

    </motion.div>
  )
}

export default Cartcontainer