import {Header,CreateContainer,MainContainer} from "./app/components/section/index"
import {Routes ,Route} from "react-router-dom"
import { AnimatePresence} from 'framer-motion'

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      <main className="md:mt-24 mt-16 p-8 w-full">
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
