import React from 'react'
import style from "./project.module.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={style.nav}>
       <div className={style.left}>
          <i>ShoppingKaro.com</i>
       </div>
       <article className={style.right}>
          <NavLink className={style.navlink} to="/">Product</NavLink>
          <NavLink className={style.navlink} to="/cart">Cart</NavLink>
          <NavLink className={style.navlink} to="/order">Order</NavLink>
          <NavLink className={style.navlink} to="/checkout">Checkout</NavLink>
       </article>
    </div>
  )
}

export default NavBar