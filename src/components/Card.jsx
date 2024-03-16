import propsvalidation from "prop-types";

export const Card = ({ product }) => {
    return (
        <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img
                className="product-image"
                src={product.picture}
                alt={product.name}
            />
            <p className="product-price">{product.price} zł</p>
            <button className="product-add">Dodaj do koszyka</button>
        </div>
    );
};

Card.propTypes = {
    product: propsvalidation.object.isRequired,
};
