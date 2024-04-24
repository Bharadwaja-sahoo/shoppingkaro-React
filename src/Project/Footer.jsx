import React from 'react'
import { NavLink } from 'react-router-dom';
import style from  './project.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.foot}>
        <div className={style.foot1}>
            <div className={style.footbox}>
                <div className={style.footboxf1}>
                    <i>ShoppingKaro.com</i>
                </div>
                <h2>Socially and environmentally progressive outdoor Wearable things.</h2>
                <div className={style.icons}>
                    <NavLink  className={style.iconlink}>
                        <FaFacebook />
                    </NavLink>
                    <NavLink className={style.iconlink}>
                        <FaInstagram />
                    </NavLink>
                    <NavLink className={style.iconlink}>
                        <FaTwitter />
                    </NavLink>
                    <NavLink className={style.iconlink}>
                        <FaLinkedin />
                    </NavLink>
                </div>
            </div>
            <div className={style.footbox}>
                <div className={style.footboxf1}>
                    <h2>Our shop</h2>
                </div>
                <div className={style.footboxf2}>
                    <p>All Product</p>
                    <p>The Weekend Boot</p>
                    <p>THe AnyDay Rain Boot</p>
                    <p>The Morden Winter Boot</p>
                    <p>The Winter Weekend Bootz</p>
                    <p>The Terrus Clog</p>
                    <p>Accessories</p>
                    <p>ShoppingKaro.com Gift Card</p>
                </div>
            </div>
            <div className={style.footbox}>
                <div className={style.footboxf1}>
                    <h2>Help</h2>
                </div>
                <div className={style.footboxf2}>
                    <p>Size guide</p>
                    <p>Shipping Policy</p>
                    <p>Refund Policy</p>
                    <p>Wear and Care FAQ</p>
                </div>
            </div>
            <div className={style.footbox}>
                <div className={style.footboxf1}>
                    <h2>About us</h2>
                </div>
                <div className={style.footboxf2}>
                    <p>Values</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
        <div className={style.foot2}>
            <p>© 2024,</p>
            <p>ShoppingKaro.com Outdoors</p>
            <p>Powered by Shopify</p>
            <p>Refund policy</p>
            <p>Privacy policy</p>
            <p>Terms Of Service</p>
            <p>Shipping Policy</p>
            <p>Contact Information</p>
        </div>
    </div>
  )
}

export default Footer