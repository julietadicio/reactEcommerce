import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
<nav>
        
        <Link to='/' style={{textDecoration: "none", color: "white"}}>Factor Tierra</Link>
        <ul>
          <li>
            <Link to='/category/tierra' style={{textDecoration: "none", color: "white"}}>TIERRA</Link>
          </li>
          <li>
          <Link to='/category/semillas' style={{textDecoration: "none", color: "white"}}>SEMILLAS</Link>
          </li>
          <li>
          <Link to='/category/fertilizante' style={{textDecoration: "none", color: "white"}}>FERTILIZANTE</Link>

          </li>
        </ul>
        <CartWidget />
      </nav>
    )
}

export default NavBar