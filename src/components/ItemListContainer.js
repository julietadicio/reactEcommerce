const ItemListContainer = (props) => {
    return (

        <div id="section1">
            <h1 class="title">FACTOR TIERRA</h1>
            <h1>
                {props.greeting}
            </h1>
            <a class="btn" href="#section3">Ir seccion3</a>
        </div>

    )
}

export default ItemListContainer