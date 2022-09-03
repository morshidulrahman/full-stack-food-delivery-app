import { fetchuser } from "../utils/fetchlocalstore"
import { fetchcart } from "../utils/fetchlocalstore"

const userinfo = fetchuser()
const cartinfo = fetchcart()

export const initialState = {
    user: userinfo,
    fooditems: null,
    cartshow: false,
    cartItems: cartinfo
}