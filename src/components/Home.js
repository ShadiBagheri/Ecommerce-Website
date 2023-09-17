import React from 'react';
import { Link } from "react-router-dom";
//Components
//Icons
import Banner from "./Banner";
//Image
import MacBook2 from "../Image/MacBook2.png";
import phone from "../Image/phone.png";
import airpods from "../Image/airpods.png";
import watch2 from "../Image/watch2.png";
import watch from "../Image/watch.png";
//Icons
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import {AiOutlineCloseCircle, AiOutlineShoppingCart} from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
//Style
import styles from "../components/Home.module.css";


const Home = ({HomeData, detail, view, close, setClose, addToCart}) => {
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
                                             <button className={styles.btn}>Add To Cart</button>
                                         </div>
                                     </div>
                                 )
                             })
                         }
                     </div>
                 </div> :
                 null
         }
        <div className={styles.topBanner}>
            <div className={styles.container}>
                <div className={styles.detail}>
                    <h2>The Best MackBook Collection 2023</h2>
                    <Link to="/product" className={styles.link}>
                        Shop Now
                        <BsArrowRight className={styles.arrow}/>
                    </Link>
                </div>
                <div className={styles.imgBox}>
                    <img src={MacBook2} alt="MacBook2"/>
                </div>
            </div>
        </div>
         <div className={styles.productType}>
             <div className={styles.container}>
                 <div className={styles.box}>
                     <div className={styles.imgBox}>
                         <img className={styles.phone} src={phone} alt="phone"/>
                     </div>
                     <div className={styles.detail}>
                         <p>23 products</p>
                     </div>
                 </div>
                 <div className={styles.box}>
                     <div className={styles.imgBox}>
                         <img src={airpods} alt="airpods"/>
                     </div>
                     <div className={styles.detail}>
                         <p>43 products</p>
                     </div>
                 </div>
                 <div className={styles.box}>
                     <div className={styles.imgBox}>
                         <img src={watch2} alt="watch2"/>
                     </div>
                     <div className={styles.detail}>
                         <p>52 products</p>
                     </div>
                 </div>
                 <div className={styles.box}>
                     <div className={styles.imgBox}>
                         <img src={watch} alt="watch"/>
                     </div>
                     <div className={styles.detail}>
                         <p>35 products</p>
                     </div>
                 </div>
             </div>
         </div>
         <div className={styles.about}>
             <div className={styles.container}>
                 <div className={styles.box}>
                     <div className={styles.icon}>
                         <FiTruck/>
                     </div>
                     <div className={styles.detail}>
                         <h3>Free Shipping</h3>
                         <p>Order above $1000</p>
                     </div>
                 </div>
                 <div className={styles.box}>
                     <div className={styles.icon}>
                         <BsCurrencyDollar/>
                     </div>
                     <div className={styles.detail}>
                         <h3>Return & Refund</h3>
                         <p>Money Back Guaranty</p>
                     </div>
                 </div>
                 <div className={styles.box}>
                     <div className={styles.icon}>
                         <CiPercent/>
                     </div>
                     <div className={styles.detail}>
                         <h3>Member discount</h3>
                         <p>On Every Order</p>
                     </div>
                 </div>
                 <div className={styles.box}>
                     <div className={styles.icon}>
                         <BiHeadphone/>
                     </div>
                     <div className={styles.detail}>
                         <h3>Customer Support</h3>
                         <p>Every Time Call Support</p>
                     </div>
                 </div>
             </div>
         </div>
         <div className={styles.product}>
             <h2>Top Products</h2>
             <div className={styles.container}>
                 {
                     HomeData.map((item) => (
                     <div className={styles.box} key={item.id}>
                          <div className={styles.imgBox}>
                              <div className={styles.image}>
                                  <img src={item.img} alt={item.Title}/>
                              </div>
                               <div className={styles.icon}>
                                   <li onClick={() => addToCart (item)}>
                                       <AiOutlineShoppingCart/>
                                   </li>
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
         <Banner/>
     </>
    );
};

export default Home;