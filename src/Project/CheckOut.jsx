import React, { useState } from 'react'
import style  from './project.module.css';

const CheckOut = () => {
   let [state,setState] = useState({
      name:"",
      email: "",
      phoneNumber: "",
      address: ""
   })
    
   let {name,email,phoneNumber,address} = state
    
   const handleInputChange = (e) =>{

    setState({...state,[e.target.name]: e.target.value})
    
   }


  return (
    <div className={style.hundred}>
       <form className={style.container} action="" onSubmit={ (e)=>{e.preventDefault(); alert("Your order has been placed!")}}>
         <input type="text" name="name"  value={name} placeholder='Enter your name' onChange={handleInputChange}/>
         <input type="email" name="email" value={email} placeholder='Enter your email' onChange={handleInputChange}/>
         <input type="text" name="phoneNumber"  value={phoneNumber} placeholder='Enter your phone number' onChange={handleInputChange}/>
         <textarea name="address" value={address} id="" cols="40" rows="10" placeholder='Enetr your address' onChange={handleInputChange}></textarea>
         <button className={style.link}>Submit</button>
       </form>
       
      {/* <h1>Order placed successful and Thank you for booking...!</h1> */}
    </div>
  )
}

export default CheckOut