import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//Icons
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { CiLogin, CiLogout } from "react-icons/ci";
//Image
import logo from "../Image/logo.png";
//Style
import styles from "../components/Nav.module.css";


const Nav = ({searchBtn}) => {

    const [search, setSearch] = useState();
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
           <div className={styles.free}>
               <div className={styles.icon}>
                   <FaTruckMoving/>
               </div>
               <p>FREE Shipping When Shopping Upto 1000 $</p>
           </div>
            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={styles.searchBox}>
                        <input type="text" placeholder="Search Your Product" value={search} onChange={searchHandler}/>
                        <button onClick={() => searchBtn(search)}>Search</button>
                    </div>
                    <div className={styles.icon}>
                        {
                            isAuthenticated &&
                            (
                                <div className={styles.account}>
                                    <div className={styles.userIcon}>
                                        <AiOutlineUser/>
                                    </div>
                                    <p>Hello {user.name}</p>
                                </div>
                            )
                        }
                        <div className={styles.secondIcons}>
                            <Link to="/" className={styles.link}><AiOutlineHeart/></Link>
                            <Link to="/cart" className={styles.link}><BsBagCheck/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header}>
                <div className={styles.container}>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className={styles.link}>Home</Link>
                            </li>
                            <li>
                                <Link to="/product" className={styles.link}>Product</Link>
                            </li>
                            <li>
                                <Link to="/about" className={styles.link}>About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={styles.link}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.auth}>
                        {
                            isAuthenticated ?
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}><CiLogout/></button> :
                                <button onClick={() => loginWithRedirect()}><CiLogin/></button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;