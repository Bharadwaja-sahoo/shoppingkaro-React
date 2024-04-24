import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import style from "./project.module.css"
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let [state,setState]=useState();
    let [sign,setSign]=useState(false);
    let [user,setUser]=useState(null);
    let [error,setError]=useState(null);

    let handelLogin=()=>{
        setSign(false);
    }
    let handelSignup=()=>{
        setSign(true);
    }
    // let navigate=useNavigate();
    let handelSubmit=(e)=>{
        e.preventDefault( );
        if (sign) {
            let formData = new FormData(e.target);
            let userData = {
                username: formData.get('username'),
                phone: formData.get('phone'),
                password: formData.get('password'),
                confirmPassword: formData.get('confirmPassword')
            };
            if (userData.password === userData.confirmPassword) {
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                alert('Signup successful');
            } else {
                alert('Passwords do not match');
            }
        }
        else {
            let formData = new FormData(e.target);
            let storedUser = JSON.parse(localStorage.getItem('user'));
            if (formData.get('username') === storedUser.username && formData.get('password') === storedUser.password) {
                alert('Login successful');
                
                // navigate('/routing');
            } else {
                setError('Invalid username or password');
            }
        }
    }
  return (
    <div className={style.signup_container}>
        {state==null ? (
            <div className={style.signup_box}>
                <p>Hii there!</p>
                <p>Welcome to this page...</p>
                <div className={style.cart_btn}>
                    <button onClick={handelLogin} className={style.link}>Login</button>
                    <button onClick={handelSignup} className={style.link}>Signup</button>
            </div>
    </div>
    ):""}
    {sign==false ? (
        <article className={style.signup_dibba}>
            <p>Login Page !!!</p>
            <form onSubmit={handelSubmit} className={style.signup_form}>
                <input type="text" name="username" placeholder='User Name' required />
                <input type="password" name="password" placeholder='Password' required />
                <button className={style.link}>submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </article>):(<article className={style.signup_dibba}>
                <p>Sign Up Page !!!</p>
                <form onSubmit={handelSubmit} className={style.signup_form}>
                    <input type="text" name="username" placeholder='Enter User Name' required />
                    <input type="text" name="phone" placeholder='Enter your Phone Number' required />
                    <input type="password" name="password" placeholder='Enter Password' required />
                    <input type="password" name="confirmPassword" placeholder='Confirm password' required />
                    <button className={style.link}>Submit</button>
                </form>
            </article>)}
    </div>);
}

export default SignUp;