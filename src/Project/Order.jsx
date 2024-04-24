import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import style from './project.module.css'

const Order = () => {
    let [state,setState] = useState("")
    let {id} = useParams();
    let [count,setCount] = useState(1)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setState(res.data)
        }).catch(()=>{
            console.log("Loading...");
        })
    },[])
   
    let additems =()=>{
        setCount(count+1)
    }

    let subitems=()=>{
        
        if (count<=1){

        }
        else
        {
            setCount(count-1)
        }
    }

    let totalprice=()=>{
        return count*state.price
    }
  return (
    <div className={style.hundred}>
        {state==""?(
            <div className={style.empty}>
            <p><span>Please go to Product and select Cart</span></p>
            <Link to="/products">Products</Link>
        </div>
        ):(<div className={style.cartdiv} key={state.id}>
            <img className={style.cartimg} src={state.image} alt="" />
            <div className={style.visibleCart}>
                <p>{state.title}</p>
                <p>Price: <span>${state.price}</span></p>
                <div className={style.addremove}>
                    <button onClick={subitems} >-</button> 
                    <p>{count}</p> 
                    <button onClick={additems}>+</button>
                </div> 
                <p>Total price: <span>${totalprice()}</span></p>
                <div className={style.cart_btn}>
                <Link className={style.link} to={`/cart/${id}`}>Cart</Link>
                <Link className={style.link} to="/checkout">Go To Checkout</Link>
                </div>
            </div>
        </div>)}

    </div>
  )
}

export default Order