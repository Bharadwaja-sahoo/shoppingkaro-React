import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
// import SignUp from './SignUp'
import Top from './Top'

const LayOut = () => {
  return (
    <div>
        {/* <SignUp/> */}
        <Top/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayOut