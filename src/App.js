import { animate, color, motion } from 'framer-motion'
import Taskform from './components/Taskform';
import { FaTasks } from "react-icons/fa";
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <>
      <motion.div className="container" data-aos="flip-right" >
        <motion.div drag className='taskbox'  dragConstraints={{
                    top: -125,
                    right: 125,
                    bottom: 125,
                    left: -125,
                }}>
          <motion.div className="header">
            <h1>Task Tracker <FaTasks/></h1>
          </motion.div>
          <Taskform/>
        </motion.div>
      </motion.div>
    </>
  );
}

export default App
