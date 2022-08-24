import {Header,CreateContainer,MainContainer} from "./app/components/section/index"
import {Routes ,Route} from "react-router-dom"
import { AnimatePresence} from 'framer-motion'

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      <main className="md:mt-20 mt-14 md:px-16 py-4 w-full px-4">
          <Routes>
             <Route path="/" element={<MainContainer/>}/>
             <Route path="/createcontainer" element={<CreateContainer/>}/>
          </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
