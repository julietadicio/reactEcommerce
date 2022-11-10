import { Link } from "react-router-dom";

const Item = ({ id, name, image, cost }) => {
    return (
        <>
            <Link to={`/item/${id}`} className="linkDetails">
                <div className="item">
                    <div className="itemInfo">
                        <h1> {name} </h1>
                        <img src={image} alt="Imagen" />
                        <h2> ${cost} </h2>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default Item;
