import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import style from './project.module.css'

const Cart = () => {
    let [state,setState] = useState("")
    let {id} = useParams()

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setState(res.data)
        }).catch(()=>{
            console.log("Loading...");
        })
    })

  return (
    <div  className={style.hundred}>
        {state=="" ? (<div className={style.empty}>
            <p><span>Please go to Product and select Cart</span></p>
            <Link to="/products">Products</Link>
        </div>) : (<div className={style.cartdiv} key={state.id}>
            <img className={style.cartimg} src={state.image} alt="" />
            <div className={style.visibleCart}>
                <p>{state.title}</p>
                <p>Price: <span>${state.price}</span></p>
                <p>{state.description}</p>
                <div  className={style.cart_btn}>
                    <Link className={style.link} to="/">Go To Back</Link>
                    <Link className={style.link} to={`/order/${id}`}>Go To Order</Link>
                </div> 
            </div>
        </div>
        )}
    </div>
  )
}

export default Cart