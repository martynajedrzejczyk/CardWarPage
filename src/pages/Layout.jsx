import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import "./Layout.css";

const Layout = () => {
    const props = {
        items: [
            {
                text: "Strona główna",
                link: "/",
            },
            {
                text: "Współprace",
                link: "/collabs",
            },
            {
                text: "Produkty",
                link: "/products",
            },
            {
                text: "Dodatkowe treści",
                link: "/blog",
            },
            // {
            //     text: "Koszyk",
            //     link: "/cart",
            // },
            {
                text: "Obsługa Klienta",
                link: "/customerService",
            },
            {
                text: "Kontakt",
                link: "/contact",
            },
        ],
        logo: {
            text: "Diamond Deck Designs",
        },
        float: true,
        align: "left",
        style: {
            linkStyles: {
                color: "black",
            },
            logoStyles: {
                color: "black",
            },
            barStyles: {
                background: "#f1efe9",
                color: "black",
                boxShadow: "0 0 15px 20px #f1efe9",
                height: "60px",
            },
            sidebarStyles: {
                background: "#222",
                buttonColor: "black",
            },
        },
    };
    return (
        <>
            <div className="bigZIndex">
                <Navbar {...props} />
            </div>
            <div className="outlet-container">
                <Outlet />
            </div>

            <div className="bigZIndex">
                <Footer />
            </div>
        </>
    );
};

export default Layout;
