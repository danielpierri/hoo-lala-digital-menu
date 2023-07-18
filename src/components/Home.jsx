import { useState, useEffect } from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import hooLalaEntrada from "../assets/hoo-lala-entrada.json"
import hooLalaExecutivo from "../assets/hoo-lala-executivo.json"
import hooLalaMassa from "../assets/hoo-lala-massa.json"

const Home = () => {
  // State of data fetching
  const [entrada, setEntrada] = useState([])
  const [executivo, setExecutivo] = useState([])
  const [massa, setMassa] = useState([])

  const fetchFoodData = () => {
    setEntrada(hooLalaEntrada)
    setExecutivo(hooLalaExecutivo)
    setMassa(hooLalaMassa)
  }

  useEffect(() => {
    fetchFoodData()
  }, [])

  // State of opening menu
  const [showEntrada, setShowEntrada] = useState(false)
  const [showExecutivo, setShowExecutivo] = useState(false)
  const [showMassa, setShowMassa] = useState(false)

  return (
    <main className="main">
      <div>

        <Nav />
        <section className="section">
          <div className="section__wrapper">

            <div className="section__sticky-top">
              <h2 className="section__title section--sticky"
              onClick={() => setShowEntrada(prevEntrada => !prevEntrada)}
              >
                Entradas
                <i className={showEntrada ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
              </h2>

              {entrada.length > 0 && (
                <div className={showEntrada ? "food" : "food food--hidden"} style={showEntrada ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
                  {entrada.map((entrada) => {
                    return (
                      <div key={entrada.id} className="food__container">
                        <div>
                          <h3 className="food__title">{entrada.title}</h3>
                          <p className="food__desc">{entrada.description}</p>
                          <p className="food__price">{entrada.price}</p>
                        </div>
                        <div>
                          <img src={entrada.img} alt={entrada.description} className="food__img" />
                        </div>
                      </div>
                    )
                  })}
                </div>

              )}
            </div>

            <div className="section__sticky-top">
              <h2 className="section__title section--sticky"
              onClick={() => setShowExecutivo(prevEntrada => !prevEntrada)}
              >
                Pratos Executivos
                <i className={showExecutivo ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
              </h2>
              {executivo.length > 0 && (
                <div className={showExecutivo ? "food" : "food food--hidden"} style={showExecutivo ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
                  {executivo.map((executivo) => {
                    return (
                      <div key={executivo.id} className="food__container">
                        <div>
                          <h3 className="food__title">{executivo.title}</h3>
                          <p className="food__desc">{executivo.description}</p>
                          <p className="food__price">{executivo.price}</p>
                        </div>
                        <div>
                          <img src={executivo.img} alt={executivo.description} className="food__img" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="section__sticky-top">
              <h2 className="section__title section--sticky"
              onClick={() => setShowMassa(prevEntrada => !prevEntrada)}
              >
                Massas e Arroz
                <i className={showMassa ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
              </h2>
              {massa.length > 0 && (
                <div className={showMassa ? "food" : "food food--hidden"} style={showMassa ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
                  {massa.map((massa) => {
                    return (
                      <div key={massa.id} className="food__container">
                        <div>
                          <h3 className="food__title">{massa.title}</h3>
                          <p className="food__desc">{massa.description}</p>
                          <p className="food__price">{massa.price}</p>
                        </div>
                        <div>
                          <img src={massa.img} alt={massa.description} className="food__img" />
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

