import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
<nav>
        
        <Link to='/' style={{textDecoration: "none", color: "white"}}>Factor Tierra</Link>
        <ul>
          <li>
            <Link to='/category/Tierra' style={{textDecoration: "none", color: "white"}}>TIERRA</Link>
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