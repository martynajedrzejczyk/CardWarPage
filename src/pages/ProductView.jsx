import PropTypes from "prop-types";

const ProductView = ({ productId }) => {
    return (
        <div>
            <h1>{productId.name}</h1>
            <p>{productId.description}</p>
        </div>
    );
};

export default ProductView;

// dodanie do koszyka, ilosc, cena, zdjecie, opis, nazwa, kategoria,

ProductView.propTypes = {
    productId: PropTypes.string.isRequired,
};
