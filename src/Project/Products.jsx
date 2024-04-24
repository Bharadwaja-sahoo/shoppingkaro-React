import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './project.module.css'

const Products = () => {
    let [state,setState] = useState([]);
    let [filtered,setFilter]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setState(res.data)
        }).catch(()=>{
            console.log("Loading...");
        })
    },[]);

    const handleCategoryClick = (category) => {
        const filteredData = state.filter(product => product.category === category)
        setFilter(filteredData)
      }
  return (
    <div className={style.data}>
        <div className={style.button_container}>
            <button className={style.bottonlink} onClick={()=> handleCategoryClick('All')}>All</button>
            <button className={style.bottonlink} onClick={()=> handleCategoryClick("women's clothing")}>women's clothing</button>
            <button className={style.bottonlink} onClick={()=> handleCategoryClick("men's clothing")}>men's clothing</button>
            <button className={style.bottonlink} onClick={()=> handleCategoryClick('jewelery')}>jewelery</button>
            <button className={style.bottonlink} onClick={()=> handleCategoryClick('electronics')}>electronics</button>
        </div>
        {
            filtered.length > 0 ?
            filtered.map((data) => {
                return (
                    <div className={style.data1} key={data.id}>
                    <p>{data.title}</p>
                    <img src={data.image} alt="" />
                    <NavLink className={style.productnavlink} to={`/cart/${data.id}`}>Go To Cart</NavLink>
                 </div>
            )})
        :state.map((data)=>{
            return <div className={style.data1} key={data.id}>
               <p>{data.title}</p>
               <img src={data.image} alt="" />
               <NavLink className={style.productnavlink} to={`/cart/${data.id}`}>See more</NavLink>
            </div>
        })}
    </div>
  )
}

export default Products