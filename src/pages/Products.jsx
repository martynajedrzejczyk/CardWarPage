import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { products } from "../products.js";
import "./Product.css";
import { Card } from "../components/Card.jsx";

const Products = () => {
    console.log(products);
    return (
        <div>
            <h1>Poznaj nasze kolekcje</h1>
            <Tabs>
                <TabList>
                    <Tab>Pik</Tab>
                    <Tab>Kier</Tab>
                    <Tab>Trefl</Tab>
                    <Tab>Karo</Tab>
                </TabList>

                <TabPanel>
                    <div className="products-container">
                        {products.map((product) => {
                            if (product.name === "pik") {
                                return product.products.map((prod) => {
                                    return (
                                        <Card product={prod} key={prod.id} />
                                    );
                                });
                            }
                        })}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products-container">
                        {products.map((product) => {
                            if (product.name === "kier") {
                                return product.products.map((prod) => {
                                    return (
                                        <Card product={prod} key={prod.id} />
                                    );
                                });
                            }
                        })}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products-container">
                        {products.map((product) => {
                            if (product.name === "trefl") {
                                return product.products.map((prod) => {
                                    return (
                                        <Card product={prod} key={prod.id} />
                                    );
                                });
                            }
                        })}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products-container">
                        {products.map((product) => {
                            if (product.name === "karo") {
                                return product.products.map((prod) => {
                                    return (
                                        <Card product={prod} key={prod.id} />
                                    );
                                });
                            }
                        })}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Products;

// – produkty firmy (prosty spis oferowanych produktów w formie cennika >>dokładne opisy
//     produktów uzupełnione fotografiami<< multimedialne katalogi, prezentujące oferowane dobra w
//     najdrobniejszych szczegółach),
