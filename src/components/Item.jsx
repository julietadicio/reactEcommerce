import { Link } from "react-router-dom";

const Item = ({ id, name, image }) => {
    return (
        <>
            <Link to={`/item/${id}`} className="linkDetails">
                <div className="item">
                    <div className="itemInfo">
                        <h1> {name} </h1>
                        <img src={image} alt="Imagen" />
                    </div>
                </div>
            </Link>

        </>
    )
}

export default Item;
