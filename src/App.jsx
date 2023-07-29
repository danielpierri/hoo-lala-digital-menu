import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Routes>
      <Route path="/hoo-lala-digital-menu" element={ <Home /> } />
    </Routes>

    <Footer />
    </>
  )
}

export default App
