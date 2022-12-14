export const actionType = {
    SET_USER: "SET_USER",
    SET_FOOD_ITES: "SET_FOOD_ITEMS",
    SET_SHOW_ITEMS: "SET_SHOW_ITEMS",
    SET_CART_ITEMS: " SET_CART_ITEMS"
}

const reducer = (state, action) => {

    switch (action.type) {

        case (actionType.SET_USER):
            return {
                ...state,
                user: action.user,
            }
        case (actionType.SET_FOOD_ITES):
            return {
                ...state,
                fooditems: action.fooditems,
            }

        case (actionType.SET_CART_ITEMS):
            return {
                ...state,
                cartItems: action.cartItems,
            }

        case (actionType.SET_SHOW_ITEMS):
            return {
                ...state,
                cartshow: action.cartshow,
            }

        default:
            return state;

    }
}
export default reducer