export const fetchuser = () => {
    // eslint-disable-next-line
    let userinfo =
        localStorage.getItem("user") !== "undefined"
            ? JSON.parse(localStorage.getItem("user"))
            : localStorage.clear()

    return userinfo
}

export const fetchcart = () => {
    // eslint-disable-next-line
    let cartinfo =
        localStorage.getItem("cartItems") !== "undefined"
            ? JSON.parse(localStorage.getItem("cartItems"))
            : localStorage.clear()
    return cartinfo ? cartinfo : []
}