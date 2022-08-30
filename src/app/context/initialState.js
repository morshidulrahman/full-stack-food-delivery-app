import fetchuser from "../utils/fetchlocalstore"
const { userinfo } = fetchuser
export const initialState = {
    user: userinfo,
    fooditems: null,

}