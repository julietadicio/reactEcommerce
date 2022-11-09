import { Link } from "react-router-dom";

const Item = ({ id, name, image }) => {
        return (
        <>
            <div className="itemContainer">
                <div className="item">
                    <div className="itemInfo">
                        <h1> {name} </h1>
                        <Link to={`/item/${id}`} className="linkDetails">Details</Link>
                        <img src={image} alt="Imagen" />
                    </div>
                </div>
            </div>
        </>
        )
}

export default Item;
