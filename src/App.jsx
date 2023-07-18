import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"

function App() {

  return (
    <>
    <Routes>
      <Route path="/hoo-lala-digital-menu" element={ <Home /> } />
    </Routes>
    </>
  )
}

export default App
