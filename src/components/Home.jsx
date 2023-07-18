import { useState, useEffect } from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import hooLalaPratosPrincipais from "../assets/hoo-lala-pratos-principais.json"
import hooLalaCarnesEFrangos from "../assets/hoo-lala-carnes-e-frangos.json"
import hooLalaComidasDaCasa from "../assets/hoo-lala-comidas-da-casa.json"
import hooLalaMassasEArroz from "../assets/hoo-lala-massas-e-arroz.json"
import hooLalaPratosFrios from "../assets/hoo-lala-pratos-frios.json"
import hooLalaSopasECaldos from "../assets/hoo-lala-sopas-e-caldos.json"

const Home = () => {
  // State of data fetching
  const [pratoPrincipal, setPratoPrincipal] = useState([])
  const [carneEFrango, setCarneEFrango] = useState([])
  const [comidaDaCasa, setComidaDaCasa] = useState([])
  const [massaEArroz, setMassaEArroz] = useState([])
  const [pratoFrio, setPratoFrio] = useState([])
  const [sopaECaldo, setSopaECaldo] = useState([])

  const fetchFoodData = () => {
    setPratoPrincipal(hooLalaPratosPrincipais)
    setCarneEFrango(hooLalaCarnesEFrangos)
    setComidaDaCasa(hooLalaComidasDaCasa)
    setMassaEArroz(hooLalaMassasEArroz)
    setPratoFrio(hooLalaPratosFrios)
    setSopaECaldo(hooLalaSopasECaldos)
  }

  useEffect(() => {
    fetchFoodData()
  }, [])

  // State of opening menu
  const [showPratoPrincipal, setShowPratoPrincipal] = useState(false)
  const [showCarneEFrango, setShowCarneEFrango] = useState(false)
  const [showComidaDaCasa, setShowComidaDaCasa] = useState(false)
  const [showMassaEArroz, setShowMassaEArroz] = useState(false)
  const [showPratoFrio, setShowPratoFrio] = useState(false)
  const [showSopaECaldo, setShowSopaECaldo] = useState(false)

  return (
    <main className="main">
      <div>

        <Nav />
        <section className="section">
          <div className="section__wrapper">

            <div className="section__sticky-top">
              <h2 className="section__title section--sticky"
              onClick={() => setShowPratoPrincipal(prevPratoPrincipal => !prevPratoPrincipal)}
              >
                Pratos Principais
                <i className={showPratoPrincipal ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
              </h2>

              {pratoPrincipal.length > 0 && (
                <div className={showPratoPrincipal ? "food" : "food food--hidden"} style={showPratoPrincipal ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
                  {pratoPrincipal.map((pratoPrincipal) => {
                    return (
                      <div key={pratoPrincipal.id} className="food__container">
                        <div>
                          <h3 className="food__title">{pratoPrincipal.title}</h3>
                          <p className="food__desc">{pratoPrincipal.description}</p>
                          <p className="food__price">{pratoPrincipal.price}</p>
                        </div>
                        <div>
                          <img src={pratoPrincipal.img} alt={pratoPrincipal.description} className="food__img" />
                        </div>
                      </div>
                    )
                  })}
                </div>

              )}
            </div>

            <div className="section__sticky-top">
              <h2 className="section__title section--sticky"
              onClick={() => setShowCarneEFrango(prevCarneEFrango => !prevCarneEFrango)}
              >
                Carnes e Frangos
                <i className={showCarneEFrango ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
              </h2>
              {carneEFrango.length > 0 && (
                <div className={showCarneEFrango ? "food" : "food food--hidden"} style={showCarneEFrango ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
                  {carneEFrango.map((carneEFrango) => {
                    return (
                      <div key={carneEFrango.id} className="food__container">
                        <div>
                          <h3 className="food__title">{carneEFrango.title}</h3>
                          <p className="food__desc">{carneEFrango.description}</p>
                          <p className="food__price">{carneEFrango.price}</p>
                        </div>
                        <div>
                          <img src={carneEFrango.img} alt={carneEFrango.description} className="food__img" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="section__sticky-top">
              <h2 className="section__title section--sticky"
              onClick={() => setShowComidaDaCasa(prevComidaDaCasa => !prevComidaDaCasa)}
              >
                Comidas da Casa
                <i className={showComidaDaCasa ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
              </h2>
              {comidaDaCasa.length > 0 && (
                <div className={showComidaDaCasa ? "food" : "food food--hidden"} style={showComidaDaCasa ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
                  {comidaDaCasa.map((comidaDaCasa) => {
                    return (
                      <div key={comidaDaCasa.id} className="food__container">
                        <div>
                          <h3 className="food__title">{comidaDaCasa.title}</h3>
                          <p className="food__desc">{comidaDaCasa.description}</p>
                          <p className="food__price">{comidaDaCasa.price}</p>
                        </div>
                        <div>
                          <img src={comidaDaCasa.img} alt={comidaDaCasa.description} className="food__img" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="section__sticky-top">
              <h2 className="section__title section--sticky"
              onClick={() => setShowMassaEArroz(prevMassaEArroz => !prevMassaEArroz)}
              >
                Massas e Arroz
                <i className={showMassaEArroz ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
              </h2>
              {massaEArroz.length > 0 && (
                <div className={showMassaEArroz ? "food" : "food food--hidden"} style={showMassaEArroz ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
                  {massaEArroz.map((massaEArroz) => {
                    return (
                      <div key={massaEArroz.id} className="food__container">
                        <div>
                          <h3 className="food__title">{massaEArroz.title}</h3>
                          <p className="food__desc">{massaEArroz.description}</p>
                          <p className="food__price">{massaEArroz.price}</p>
                        </div>
                        <div>
                          <img src={massaEArroz.img} alt={massaEArroz.description} className="food__img" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="section__sticky-top">
              <h2 className="section__title section--sticky"
              onClick={() => setShowPratoFrio(prevPratoFrio => !prevPratoFrio)}
              >
                Pratos Frios
                <i className={showPratoFrio ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
              </h2>
              {pratoFrio.length > 0 && (
                <div className={showPratoFrio ? "food" : "food food--hidden"} style={showPratoFrio ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
                  {pratoFrio.map((pratoFrio) => {
                    return (
                      <div key={pratoFrio.id} className="food__container">
                        <div>
                          <h3 className="food__title">{pratoFrio.title}</h3>
                          <p className="food__desc">{pratoFrio.description}</p>
                          <p className="food__price">{pratoFrio.price}</p>
                        </div>
                        <div>
                          <img src={pratoFrio.img} alt={pratoFrio.description} className="food__img" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="section__sticky-top">
              <h2 className="section__title section--sticky"
              onClick={() => setShowSopaECaldo(prevSopaECaldo => !prevSopaECaldo)}
              >
                Sopas e Caldos
                <i className={showSopaECaldo ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
              </h2>
              {sopaECaldo.length > 0 && (
                <div className={showSopaECaldo ? "food" : "food food--hidden"} style={showSopaECaldo ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
                  {sopaECaldo.map((sopaECaldo) => {
                    return (
                      <div key={sopaECaldo.id} className="food__container">
                        <div>
                          <h3 className="food__title">{sopaECaldo.title}</h3>
                          <p className="food__desc">{sopaECaldo.description}</p>
                          <p className="food__price">{sopaECaldo.price}</p>
                        </div>
                        <div>
                          <img src={sopaECaldo.img} alt={sopaECaldo.description} className="food__img" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

          </div>
        </section>
      </div>

      <Footer />

    </main>
  )
}

export default Home

