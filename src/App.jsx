import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { motion } from "framer-motion"
import CircleLoader from "react-spinners/CircleLoader"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  // Loading Screen
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

   // Animation
   const animation = {
    initial: {
      y: "100vh"
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.1
      }
    }
  }

  return (
    <div className="app">
      {loading ? (
        <div className="loader__container">
          <CircleLoader color={`#FFFC63`} size={50} aria-label="Loading Spinner" />
        </div>
      ) : (
        <>

          <motion.div
          variants={animation}
          initial="initial"
          animate="final"
          className="hero"
          >
            <Routes>
              <Route path="/" element={ <Home /> } />
            </Routes>
            <Footer />
          </motion.div>
        </>
      )}
      </div>
  )
}

export default App
