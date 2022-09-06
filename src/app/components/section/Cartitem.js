import React, { useEffect, useState } from 'react'
import { BiMinus } from "react-icons/bi"
import { BsPlus } from "react-icons/bs"
import { motion } from "framer-motion"
import { actionType } from '../../context/reducer'
import { Usestatevalue } from '../../context/StateProvider'
function Cartitem({ item, setFlag, flag }) {
    const [qty, setqty] = useState(2)
    const [items, setitems] = useState(item.qty)
    const [{ cartItems }, dispatch] = Usestatevalue()

    const cartdispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items))
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items
        });
    }
    const updateqty = (action, id) => {
        if (action === "add") {
            setqty(qty + 1)
            // eslint-disable-next-line
            cartItems.map(item => {
                if (item.id === id) {
                    item.qty += 1
                    setFlag(flag + 1)
                }
            })
            // eslint-disable-next-line
            cartdispatch()
        } else {
            // eslint-disable-next-line
            if (qty == 1) {
                // eslint-disable-next-line
                items = cartItems.filter(item => item.id !== id)
                setFlag(flag + 1)
                cartdispatch()
            } else {
                setqty(qty - 1)
                // eslint-disable-next-line
                cartItems.map(item => {
                    if (item.id === id) {
                        item.qty -= 1
                        setFlag(flag + 1)
                    }
                })
                cartdispatch()
            }
        }
    }
    // eslint-disable-next-line
    useEffect(() => {
        setitems(cartItems)
        // eslint-disable-next-line
    }, [qty, items])

    return (
        <>
            <div className='w-full p-1 px-2 bg-cartItem flex items-center gap-2 rounded-lg  '>
                <img
                    className='w-20 h-20 rounded-full object-contain'
                    src={item.imageURL} alt="dd" />
                <div className='flex flex-col gap-2'>
                    <p className='text-gray-50 text-base capitalize'>{item.title}</p>
                    <span className='text-gray-300 block font-semibold'>$ {Math.floor(item.prices) * qty}</span>
                </div>
                <div className='ml-auto flex items-center group gap-2 cursor-pointer'>
                    <motion.div whileTap={{ scale: 0.6 }} onClick={() => updateqty("remove", item.id)}>
                        <BiMinus className='text-gray-50' />
                    </motion.div>
                    <p className='w-5 h-5 items-center bg-cartBg text-white flex justify-center'>{qty}</p>
                    <motion.div whileTap={{ scale: 0.6 }} onClick={() => updateqty("add", item.id)}>
                        <BsPlus className='text-gray-50' />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Cartitem