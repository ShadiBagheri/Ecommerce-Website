import React from 'react';
import { Link } from "react-router-dom";
//Image
import ipad2 from "../Image/ipad2.png";
//Icons
import { BsArrowRight } from "react-icons/bs";
//Style
import styles from "../components/Banner.module.css";


const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <div className={styles.detail}>
                        <h4>LATEST  TECHNOLOGY  ADDED</h4>
                        <h3>Apple Ipad 10.2 9th Gen - 2021</h3>
                        <p>$ 989</p>
                        <Link to="/product">Shop Now</Link>
                        <BsArrowRight/>
                    </div>
                    <div className={styles.imgBox}>
                        <img src={ipad2} alt="ipad2"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;