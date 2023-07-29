const Footer = () => {
  return (
    <footer className="footer">
      <div>

        <ul className="footer__contact">

          <li>
            <i className="fa-solid fa-phone"></i> 
            <a href="tel:+5521984870140" target="_blank" rel="noreferrer">(21) 2252-4502</a>
          </li>

          <li>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:comercial@bigcontrol.com.br" target="_blank" rel="noreferrer">hoolalarestaurante@gmail.com</a>
          </li>

          <li>
            <i className="fa-solid fa-location-dot address-icon"></i>
            <a href="https://goo.gl/maps/7UwUJ6wSuzTsiL916" target="_blank" rel="noreferrer" className="address-text">Avenida Passos, 71</a>
          </li>

        </ul>

        <p className="footer__hours">Segunda a Sexta de 07:00 às 19:30</p>
        <p className="footer__hours">Sábado de 07:00 às 16:30</p>

        <ul className="footer__social-media">

          <li>
            <a href="https://www.instagram.com/hoolalarestaurante/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/profile.php?id=691569064320434&paipv=0&eav=AfasklzDWL8d2KEEIAdQMvo67USYb5OxyTdNfNnMG-TrqBM-5kYWxCfk4u6chFokEfo&_rdr" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>

          <li>
            <a href="https://wa.me/5521983386786?" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>

        </ul>

        <p className="signature">
          Desenvolvido por <a href="https://github.com/danielpierri" target="_blank" rel="noreferrer"> Daniel Pierri <i className="fa-brands fa-github"></i>
          </a>
        </p>

      </div>
    </footer>
  )
}

export default Footer