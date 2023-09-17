import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
//Icons
import { AiOutlineClose } from "react-icons/ai";
//Style
import styles from "../components/Cart.module.css";
import {Link} from "react-router-dom";

const Cart = ({cart, setCart}) => {

    const inqBtn = (product) => {
        const exist = cart.find(x => x.id === product.id);
        setCart(cart.map(item => item.id === product.id ?
            {...exist, quantity: exist.quantity + 1} :
            item
        ))
    }
    const decBtn = (product) => {
        const exist = cart.find(x => x.id === product.id);
        setCart(cart.map(item => item.id === product.id ?
            {...exist, quantity: exist.quantity - 1} :
            item
        ))
    }
    const removeProduct = (product) => {
        const exist = cart.find(x => x.id === product.id);
        if (exist.quantity > 0){
            setCart(cart.filter(x => x.id !== product.id));
        }
    }

    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.Price, 0) ;

    return (
        <>
            <div className={styles.cartContainer}>
                {cart.length === 0 &&
                    <div className={styles.emptyCart}>
                        <h2>Cart is Empty</h2>
                        <Link className={styles.emptyCartBtn} to="/product">Shop Now</Link>
                    </div>
                }
                <div className={styles.content}>
                    {
                        cart.map(item =>
                            <div className={styles.cartItem} key={item.id}>
                                <div className={styles.imgBox}>
                                    <img src={item.img} alt={item.Title}/>
                                </div>
                                <div className={styles.detail}>
                                    <div className={styles.info}>
                                        <h3>{item.Cat}</h3>
                                        <h4>{item.Title}</h4>
                                        <p>Price: {item.Price}</p>
                                        <div className={styles.qty}>
                                            <button className={styles.inqBtn} onClick={() => inqBtn(item)}>+</button>
                                            <input type="text" value={item.quantity}/>
                                            <button className={styles.decBtn} onClick={() => decBtn(item)}>_</button>
                                        </div>
                                        <h4 className={styles.subTotal}>Sub Total: ${item.Price * item.quantity}</h4>
                                    </div>
                                    <div className={styles.close}>
                                        <button onClick={() => removeProduct(item)}>
                                            <AiOutlineClose/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {
                    cart.length > 0 &&
                        <>
                            <h2 className={styles.totalPrice}>Total: $ {totalPrice} </h2>
                            <button className={styles.checkout}>Checkout</button>
                        </>
                }
            </div>

        </>
    );
};

export default Cart;