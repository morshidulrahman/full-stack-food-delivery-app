export const fetchuser=()=>{
    const userinfo=
    localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    :localStorage.clear()

    return userinfo
}

export default fetchuser