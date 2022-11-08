import { Link } from "react-router-dom";

const Item = ({ id, name, description, stock, cost, image, category }) => {
    return (
        <>
            <img src={image}/>
            <h1> {name} </h1>
            <h2> {description} </h2>
            <h3> {stock} </h3>
            <h3> {cost} </h3>
            <h3> {category} </h3>
            <Link to={`/item/${id}`}>Details</Link>
        </>
    )
}

export default Item;