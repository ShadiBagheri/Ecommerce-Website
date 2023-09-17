import React from 'react';
//Image
import logo from "../Image/logo.png";
//Icon
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
//Style
import styles from "../components/Footer.module.css";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.about}>
                        <div className={styles.logo}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className={styles.detail}>
                            <p>I Am A Designer & FrontEnd Developer.</p>
                            <div className={styles.icon}>
                                <li>
                                    <FaFacebookF/>
                                </li>
                                <li>
                                    <AiOutlineInstagram/>
                                </li>
                                <li>
                                    <AiOutlineTwitter/>
                                </li>
                                <li>
                                    <BsYoutube/>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className={styles.account}>
                        <h3>My Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>Shipping</li>
                            <li>Return</li>
                        </ul>
                    </div>
                    <div className={styles.page}>
                        <h3>Pages</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Terms & Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;