import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
<nav>
        <p>Factor Tierra</p> 
        <ul>
          <li href="#">
            HOME
          </li>
          <li>
            TIERRA
          </li>
          <li>
            SEMILLAS
          </li>
          <li>
            FERTILIZANTES
          </li>
        </ul>
        <CartWidget />
      </nav>
    )
}

export default NavBar