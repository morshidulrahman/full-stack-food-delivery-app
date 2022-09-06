export const fetchuser = () => {
    const userinfo =
        localStorage.getItem("user") !== "undefined"
            ? JSON.parse(localStorage.getItem("user"))
            : localStorage.clear()

    return userinfo
}

export const fetchcart = () => {
    const cartinfo =
        localStorage.getItem("cartItems") !== "undefined"
            ? JSON.parse(localStorage.getItem("cartItems"))
            : localStorage.clear()
    return cartinfo ? cartinfo : []
}