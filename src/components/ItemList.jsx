import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="ListContainerItems">
      <>
        {
          items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} name={item.name} description={item.description}
              stock={item.stock} cost={item.cost} image={item.image} category={item.category}
            />)
            : <div className="loading">
              <h1>Cargando...</h1>
            </div>
        }

      </>
    </div>
  );
};

export default ItemList