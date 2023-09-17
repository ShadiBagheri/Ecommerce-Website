import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
//Icons
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
//Style
import styles from "../components/Product.module.css";

const Product = ({ ProductData, product, setProduct, detail, view, close, setClose, addToCart}) => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const clickHandler = (product) => {
        const update = ProductData.filter(x =>  x.Cat === product);
        setProduct(update);
    }
    const productsHandler = () => {
        setProduct(ProductData);
    }

    return (
        <>
            {
                close ?
                    <div className={styles.productDetails}>
                        <div className={styles.container}>
                            <button className={styles.closeBtn} onClick={() => setClose(false)}>
                                <AiOutlineCloseCircle/>
                            </button>
                            {
                                detail.map(item => {
                                    return (
                                        <div className={styles.productBox}>
                                            <div className={styles.imgBox}>
                                                <img className={styles.image} src={item.img} alt={item.Title}/>
                                            </div>
                                            <div className={styles.detail}>
                                                <h4>{item.Cat}</h4>
                                                <h2>{item.Title}</h2>
                                                <p>
                                                    A Screen Everyone Will love: Whether Your Family Is ST
                                                </p>
                                                <h3>{item.Price}</h3>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> :
                    null
            }
            <div className={styles.product}>
                <h2># Products</h2>
                <p>Home . Products</p>
                <div className={styles.container}>
                    <div className={styles.filter}>
                        <div className={styles.categories}>
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={() => productsHandler()}>All Products</li>
                                <li onClick={() => clickHandler("Ipad")}>Ipad</li>
                                <li onClick={() => clickHandler("MacBook Air")}>MacBook Air</li>
                                <li onClick={() => clickHandler("Apple MacBook")}>Apple MacBook</li>
                                <li onClick={() => clickHandler("MacBook Pro M2")}>MacBook Pro M2</li>
                                <li onClick={() => clickHandler("Iphone 14 Pro")}>Iphone 14 Pro</li>
                                <li onClick={() => clickHandler("IPhone 13")}>IPhone 13</li>
                                <li onClick={() => clickHandler("AirPods Pro")}>AirPods Pro</li>
                                <li onClick={() => clickHandler("AirPods Max")}>AirPods Max</li>
                                <li onClick={() => clickHandler("Apple Watch SE")}>Apple Watch SE</li>
                                <li onClick={() => clickHandler("Apple Watch SE 40mm")}>Apple Watch SE 40mm</li>
                                <li onClick={() => clickHandler("IPhone 13 Pro")}>IPhone 13 Pro</li>
                                <li onClick={() => clickHandler("AirPods 3")}>AirPods 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.productBox}>
                        <div className={styles.content}>
                            {
                                product.map(item => (
                                    <div className={styles.box} key={item.id}>
                                        <div className={styles.imgBox}>
                                            <div className={styles.image}>
                                                <img src={item.img} alt={item.Title}/>
                                            </div>
                                            <div className={styles.icon}>
                                                {
                                                    isAuthenticated ?
                                                        <li onClick={() => addToCart(item)}>
                                                            <AiOutlineShoppingCart/>
                                                        </li> :
                                                        <li onClick={() => loginWithRedirect()}>
                                                            <AiOutlineShoppingCart/>
                                                        </li>
                                                }
                                                <li onClick={() => view (item)}>
                                                    <BsEye/>
                                                </li>
                                                <li>
                                                    <AiOutlineHeart/>
                                                </li>
                                            </div>
                                        </div>
                                        <div className={styles.detail}>
                                            <p>{item.Cat}</p>
                                            <h3>{item.Title}</h3>
                                            <h4>${item.Price}</h4>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;