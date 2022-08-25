import { useState } from "react";
import logo from "../../img/logo.png";
import avatar from "../../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../firebaseconfig";
import { Usestatevalue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import Navmenu from "../elements/Navmenu";

function Header() {

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = Usestatevalue();
  const [menu, setmenu] = useState(false);
  console.log(user)
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(auth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setmenu(!menu);
    }
  };
  const logout = () => {
    setmenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <div className="z-50 w-screen md:p-6 md:px-16 p-3 px-8 fixed bg-primary">
      {/* destop && tablet */}
      <div className="w-full hidden md:flex items-center justify-between">
        <Link to="/" className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-8 object-cover " />
          <p className="text-headingcolor text-xl font-bold capitalize">city</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center space-x-8"
          >
            <Navmenu/>
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-2xl text-textcolor cursor-pointer" />
            <div className="w-5 h-5 absolute -top-2 -right-2 rounded-full bg-cartNumBg flex justify-center items-center">
              <p className="text-white  font-semibold text-xs">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user?.photoURL : avatar}
              alt="avatar"
              onClick={login}
              className="w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl rounded-full"
            />
            {menu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 absolute top-12 right-0 flex flex-col rounded-md shadow-xl"
              >
                {user && user.email === "boydanger416@gmail.com" && (
                  <Link to="/createcontainer">
                    <p className="px-4 py-2 text-base capitalize hover:bg-slate-100 duration-100 transition-all ease-in-out flex items-center gap-3">
                      new item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 text-base capitalize hover:bg-slate-100 duration-100 transition-all ease-in-out flex items-center gap-3"
                  onClick={logout}
                >
                  logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className="w-full flex md:hidden justify-between">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-2xl text-textcolor cursor-pointer" />
          <div className="w-5 h-5 absolute top-0 -right-2 rounded-full bg-cartNumBg flex justify-center items-center">
            <p className="text-white  font-semibold text-xs">2</p>
          </div>
        </div>
        <Link to="/" className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-8 object-cover " />
          <p className="text-headingcolor text-xl font-bold capitalize">city</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user?.photoURL : avatar}
            alt="data nai"
            onClick={login}
            className="w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl rounded-full"
          />
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 absolute top-12 right-0 flex flex-col rounded-md shadow-xl"
            >
              {user && user.email === "boydanger416@gmail.com" && (
                <Link to="/createcontainer">
                  <p className="px-4 py-2 text-base capitalize hover:bg-slate-100 duration-100 transition-all ease-in-out flex items-center gap-3">
                    new item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                 <Navmenu className={"px-4 py-2 hover:bg-slate-100"}/>
              </ul>
              <p
                className="m-2 p-3 rounded-md shadow-lg text-base capitalize bg-slate-100 hover:bg-slate-300 duration-100 transition-all ease-in-out flex items-center gap-3"
                onClick={logout}
              >
                logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
