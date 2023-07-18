import chineseName from "../img/hoo-lala-chines-2.png"
import logo from "../img/hoo-lala-logo-2.png"

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper">

        <div>
          <img src={logo} alt="Hoo-Lala em chinês" className="nav__logo" />
          <img src={chineseName} alt="Hoo-Lala em chinês" className="nav__chinese-title" />
        </div>
        <p className="nav__title">Hoo-Lala</p>
        <p className="nav__subtitle">Culinária Tradicional Chinesa</p>

      </div>
    </nav>
  )
}

export default Nav