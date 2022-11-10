import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>

      <Link to='/' style={{ textDecoration: "none", color: "white" }}>FACTOR TIERRA</Link>
      <ul>
        <li>
          <Link to='/category/tierra' style={{ textDecoration: "none", color: "white" }}>Tierra</Link>
        </li>
        <li>
          <Link to='/category/semillas' style={{ textDecoration: "none", color: "white" }}>Semillas</Link>
        </li>
        <li>
          <Link to='/category/fertilizante' style={{ textDecoration: "none", color: "white" }}>Fertilizante</Link>

        </li>
      </ul>
      <Link to='/cart' style={{ textDecoration: "none", color: "white" }}> <CartWidget /> </Link>
    </nav>
  )
}

export default NavBar