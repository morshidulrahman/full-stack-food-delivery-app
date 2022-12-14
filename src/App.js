import { Header, CreateContainer, MainContainer } from "./app/components/section/index"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { Usestatevalue } from "./app/context/StateProvider";
import { getalldata } from "./app/utils/firebasefunction";
import { useEffect } from "react";
import { actionType } from "./app/context/reducer";

function App() {
  // eslint-disable-next-line
  const [{ fooditems }, dispatch] = Usestatevalue()
  const fetchdata = async () => {
    await getalldata().then(data => {
      dispatch({
        type: actionType.SET_FOOD_ITES,
        fooditems: data
      })
    })
  }
  useEffect(() => {
    // eslint-disable-next-line
    fetchdata()
    // eslint-disable-next-line
  }, [])
  return (
    <AnimatePresence >
      <div className="w-screen h-auto flex flex-col bg-primary relative">
        <Header />
        <main className="md:mt-20 mt-14 md:px-16 py-4 w-full px-4">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createcontainer" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
