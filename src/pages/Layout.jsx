import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";
import Navbar from "./Navbar";

const Layout = () => {
    // const props = {
    //     items: [
    //         {
    //             text: "Strona główna",
    //             link: "/",
    //         },
    //         {
    //             text: "Współprace",
    //             link: "/collabs",
    //         },
    //         {
    //             text: "Produkty",
    //             link: "/products",
    //         },
    //         {
    //             text: "Dodatkowe treści",
    //             link: "/blog",
    //         },
    //         // {
    //         //     text: "Koszyk",
    //         //     link: "/cart",
    //         // },
    //         {
    //             text: "Obsługa Klienta",
    //             link: "/customerService",
    //         },
    //         {
    //             text: "Kontakt",
    //             link: "/contact",
    //         },
    //     ],
    //     logo: {
    //         text: "Diamond Deck Designs",
    //     },
    //     float: true,
    //     align: "left",
    //     style: {
    //         linkStyles: {
    //             color: "black",
    //         },
    //         logoStyles: {
    //             color: "black",
    //             fontSize: "30px",
    //         },
    //         barStyles: {
    //             background: "#f1efe9",
    //             color: "black",
    //             boxShadow: "0 0 15px 20px #f1efe9",
    //             height: "60px",
    //         },
    //         sidebarStyles: {
    //             background: "#222",
    //             buttonColor: "black",
    //         },
    //     },
    // };
    return (
        <>
            <Navbar />
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
