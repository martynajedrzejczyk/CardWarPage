import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.png" className="logo-img" />
            </div>
            <div className="links">
                <a href="/">Strona Główna</a>
                <a href="/collabs">Współprace</a>
                <a href="/products">Produkty</a>
                <a href="/blog">Dodatkowe treści</a>
                <a href="/customerService">Obsługa Klienta</a>
                <a href="/contact">Kontakt</a>
            </div>
        </div>
    );
};

export default Navbar;
