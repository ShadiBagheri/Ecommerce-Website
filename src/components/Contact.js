import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

//Style
import styles from "../components/Contact.module.css";


const Contact = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    const [users, setUser] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Massage: ""
    })
    let name, value;
    const data = (event) => {
        name = event.target.name
        value = event.target.value
        setUser({...users, [name] : value})
    }
    const sendData = async (event) => {
        const { Name, Email, Subject,Massage } = users;
        event.preventDefault();
        const opinion = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                Name, Email, Subject,Massage
            })
        }
        const res = await fetch("https://ecommerce-contact-544b2-default-rtdb.firebaseio.com/Massage.json", opinion);
        console.log(res)
        if (res){
            alert("Your Massage Sent")
        } else {
            alert("An Error Occurred")
        }
    }
    return (
        <>
            <div className={styles.contactContainer}>
                <div className={styles.content}>
                    <h2># Contact us</h2>
                    <div className={styles.form}>
                        <form method="Post">
                            <input type="text" name='Name' value={users.Name} placeholder="Enter Your Full Name" autoComplete="off" required onChange={data}/>
                            <input type="email" name='Email' value={users.Email} placeholder="Enter Your E-mail" autoComplete="off" required onChange={data}/>
                            <input type="text" name='Subject' value={users.Subject} placeholder="Enter Your Subject" autoComplete="off" required onChange={data}/>
                            <textarea name='Massage' value={users.Massage} placeholder="Your Massage" autoComplete="off" required onChange={data}/>
                            {
                                isAuthenticated ?
                                    <button type="submit" onClick={sendData}>Send</button> :
                                    <button type="submit" onClick={() => isAuthenticated}>Login To Send </button>
                            }
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Contact;