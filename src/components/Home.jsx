import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import useToggle from "../hooks/useToggle"
import Nav from "./Nav"
import Menu from "./Menu"
import Footer from "./Footer"
import hooLalaPratosPrincipais from "../assets/hoo-lala-pratos-principais.json"
import hooLalaCarnesEFrangos from "../assets/hoo-lala-carnes-e-frangos.json"
import hooLalaComidasDaCasa from "../assets/hoo-lala-comidas-da-casa.json"
import hooLalaMassasEArroz from "../assets/hoo-lala-massas-e-arroz.json"
import hooLalaPratosFrios from "../assets/hoo-lala-pratos-frios.json"
import hooLalaSopasECaldos from "../assets/hoo-lala-sopas-e-caldos.json"

const Home = () => {
  // Data Fetching Custom Hook
  const [pratosPrincipais] = useFetch(hooLalaPratosPrincipais)
  const [carnesEFrangos] = useFetch(hooLalaCarnesEFrangos)
  const [comidasDaCasa] = useFetch(hooLalaComidasDaCasa)
  const [massasEArroz] = useFetch(hooLalaMassasEArroz)
  const [pratosFrios] = useFetch(hooLalaPratosFrios)
  const [sopasECaldos] = useFetch(hooLalaSopasECaldos)

  // Toggle Menu Custom Hook
  const [showPratosPrincipais, setShowPratosPrincipais] = useToggle()
  const [showCarnesEFrangos, setShowCarnesEFrangos] = useToggle()
  const [showComidasDaCasa, setShowComidasDaCasa] = useToggle()
  const [showMassasEArroz, setShowMassasEArroz] = useToggle()
  const [showPratosFrios, setShowPratosFrios] = useToggle()
  const [showSopasECaldos, setShowSopasECaldos] = useToggle()

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="main">
      {loading ? (
        <div className="loader__container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div>

            <Nav />

            <section className="section">

              <div className="section__wrapper">

                <Menu menu={pratosPrincipais} menuTitle={"Pratos Principais"} showMenu={showPratosPrincipais} toggleMenu={setShowPratosPrincipais} />

                <Menu menu={carnesEFrangos} menuTitle={"Carnes e Frangos"} showMenu={showCarnesEFrangos} toggleMenu={setShowCarnesEFrangos} />

                <Menu menu={comidasDaCasa} menuTitle={"Comidas da Casa"} showMenu={showComidasDaCasa} toggleMenu={setShowComidasDaCasa} />

                <Menu menu={massasEArroz} menuTitle={"Massas e Arroz"} showMenu={showMassasEArroz} toggleMenu={setShowMassasEArroz} />

                <Menu menu={pratosFrios} menuTitle={"Pratos Frios"} showMenu={showPratosFrios} toggleMenu={setShowPratosFrios} />

                <Menu menu={sopasECaldos} menuTitle={"Sopas e Caldos"} showMenu={showSopasECaldos} toggleMenu={setShowSopasECaldos} />

              </div>

            </section>

          </div>
          
          <Footer />
        
        </>

      )}

    </main>
  )
}

export default Home