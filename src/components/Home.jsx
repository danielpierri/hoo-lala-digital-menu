import { motion } from "framer-motion"
import useFetch from "../hooks/useFetch"
import useToggle from "../hooks/useToggle"
import Nav from "./Nav"
import Menu from "./Menu"
import hooLalaPratosPrincipais from "../assets/hoo-lala-pratos-principais.json"
import hooLalaPratosExecutivos from "../assets/hoo-lala-pratos-executivos.json"
import hooLalaCarnesEFrangos from "../assets/hoo-lala-carnes-e-frangos.json"
import hooLalaComidasDaCasa from "../assets/hoo-lala-comidas-da-casa.json"
import hooLalaMassasEArroz from "../assets/hoo-lala-massas-e-arroz.json"
import hooLalaPratosFrios from "../assets/hoo-lala-pratos-frios.json"
import hooLalaSopasECaldos from "../assets/hoo-lala-sopas-e-caldos.json"
import hooLalaSobremesas from "../assets/hoo-lala-sobremesas.json"
import hooLalaBebidas from "../assets/hoo-lala-bebidas.json"
import hooLalaCafes from "../assets/hoo-lala-cafes.json"
import hooLalaBubbleTea from "../assets/hoo-lala-bubble-tea.json"
import hooLalaLemonTea from "../assets/hoo-lala-lemon-tea.json"
import hooLalaSmoothies from "../assets/hoo-lala-smoothies.json"
import hooLalaFrapes from "../assets/hoo-lala-frapes.json"

const Home = () => {
  // Data Fetching Custom Hook
  const [pratosPrincipais] = useFetch(hooLalaPratosPrincipais)
  const [pratosExecutivos] = useFetch(hooLalaPratosExecutivos)
  const [carnesEFrangos] = useFetch(hooLalaCarnesEFrangos)
  const [comidasDaCasa] = useFetch(hooLalaComidasDaCasa)
  const [massasEArroz] = useFetch(hooLalaMassasEArroz)
  const [pratosFrios] = useFetch(hooLalaPratosFrios)
  const [sopasECaldos] = useFetch(hooLalaSopasECaldos)
  const [sobremesas] = useFetch(hooLalaSobremesas)
  const [bebidas] = useFetch(hooLalaBebidas)
  const [cafes] = useFetch(hooLalaCafes)
  const [bubbleTea] = useFetch(hooLalaBubbleTea)
  const [lemonTea] = useFetch(hooLalaLemonTea)
  const [smoothies] = useFetch(hooLalaSmoothies)
  const [frapes] = useFetch(hooLalaFrapes)

  // Toggle Menu Custom Hook
  const [showPratosPrincipais, setShowPratosPrincipais] = useToggle()
  const [showPratosExecutivos, setShowPratosExecutivos] = useToggle()
  const [showCarnesEFrangos, setShowCarnesEFrangos] = useToggle()
  const [showComidasDaCasa, setShowComidasDaCasa] = useToggle()
  const [showMassasEArroz, setShowMassasEArroz] = useToggle()
  const [showPratosFrios, setShowPratosFrios] = useToggle()
  const [showSopasECaldos, setShowSopasECaldos] = useToggle()
  const [showSobremesas, setShowSobremesas] = useToggle()
  const [showBebidas, setShowBebidas] = useToggle()
  const [showCafes, setShowCafes] = useToggle()
  const [showBubbleTea, setShowBubbleTea] = useToggle()
  const [showLemonTea, setShowLemonTea] = useToggle()
  const [showSmoothies, setShowSmoothies] = useToggle()
  const [showFrapes, setShowFrapes] = useToggle()

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
    <main className="main">
      <motion.div 
        variants={animation}
        initial="initial"
        animate="final"
        className="hero"
      >
        <div>

          <Nav />

          <section className="section">

            <div className="section__wrapper">

              <Menu menu={pratosPrincipais} menuTitle={"Pratos Principais"} showMenu={showPratosPrincipais} toggleMenu={setShowPratosPrincipais} />

              <Menu menu={pratosExecutivos} menuTitle={"Pratos Executivos"} showMenu={showPratosExecutivos} toggleMenu={setShowPratosExecutivos} />

              <Menu menu={carnesEFrangos} menuTitle={"Carnes e Frangos"} showMenu={showCarnesEFrangos} toggleMenu={setShowCarnesEFrangos} />

              <Menu menu={comidasDaCasa} menuTitle={"Comidas da Casa"} showMenu={showComidasDaCasa} toggleMenu={setShowComidasDaCasa} />

              <Menu menu={massasEArroz} menuTitle={"Massas e Arroz"} showMenu={showMassasEArroz} toggleMenu={setShowMassasEArroz} />

              <Menu menu={pratosFrios} menuTitle={"Pratos Frios"} showMenu={showPratosFrios} toggleMenu={setShowPratosFrios} />

              <Menu menu={sopasECaldos} menuTitle={"Sopas e Caldos"} showMenu={showSopasECaldos} toggleMenu={setShowSopasECaldos} />

              <Menu menu={sobremesas} menuTitle={"Sobremesas"} showMenu={showSobremesas} toggleMenu={setShowSobremesas} />

              <Menu menu={bebidas} menuTitle={"Bebidas e Sucos"} showMenu={showBebidas} toggleMenu={setShowBebidas} />

              <Menu menu={cafes} menuTitle={"Cafés"} showMenu={showCafes} toggleMenu={setShowCafes} />

              <Menu menu={bubbleTea} menuTitle={"Bubble Tea"} showMenu={showBubbleTea} toggleMenu={setShowBubbleTea} />

              <Menu menu={lemonTea} menuTitle={"Lemon Tea"} showMenu={showLemonTea} toggleMenu={setShowLemonTea} />

              <Menu menu={smoothies} menuTitle={"Smoothies"} showMenu={showSmoothies} toggleMenu={setShowSmoothies} />

              <Menu menu={frapes} menuTitle={"Frapês"} showMenu={showFrapes} toggleMenu={setShowFrapes} />

            </div>

          </section>

        </div>
      </motion.div>
    </main>
  )
}

export default Home