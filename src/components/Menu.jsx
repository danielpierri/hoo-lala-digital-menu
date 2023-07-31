import PropTypes from "prop-types"

const Menu = ({ menu, menuTitle, showMenu, toggleMenu }) => {

  return (
    <>
      <div className="section__sticky-top">

        <h2 className="section__title section--sticky"
        onClick={() => toggleMenu()}
        >
          {menuTitle}
          <i className={showMenu ? "fa-solid fa-chevron-down expanded" : "fa-solid fa-chevron-down collapsed"}></i>
        </h2>

        {menu.length > 0 && (
          <div className={showMenu ? "food" : "food food--hidden"} style={showMenu ? { maxHeight: "10000px" } : { maxHeight: 0 }}>
            {menu.map((food) => {
              return (
                <div key={food.id} className="food__container">
                  <div>
                    <h3 className="food__title">{food.title}</h3>
                    {/* <p className="food__desc">{food.description}</p> */}
                    <p className="food__price">{food.price}</p>
                  </div>
                  <div>
                    <img src={food.img} alt={food.description} className="food__img" />
                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </>
  )
}

Menu.propTypes = {
  menu: PropTypes.object,
  menuTitle: PropTypes.string,
  showMenu: PropTypes.bool,
  toggleMenu: PropTypes.func
}

export default Menu