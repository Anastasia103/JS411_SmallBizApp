import React from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Home from "./containers/Home"
import BusinessDetails from "./containers/BusinessDetails"
import NewBusiness from './containers/NewBusiness'
import SignIn from './containers/SignIn'
import cookie from 'cookie'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedin"] ? true : false
}

const ProtectedRoute = (props) => {
  const {component: Component, ...rest} = props
  console.log(rest)
  return checkAuth()  === true ? <Component {... rest} /> : <Navigate to ="/login"/>
}
const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/business/:id" element={<BusinessDetails />}/>
        <Route path="/newbusiness" element={<ProtectedRoute component ={NewBusiness}/>}/>
        <Route path="/signIn" element={<SignIn />}/>
      </Routes>
    )
}

export default Router;