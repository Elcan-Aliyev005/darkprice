import React from 'react'
import Home from './Home'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Main() {

  let { isLogin } = useSelector(store => store.auth)

  if (!isLogin) return <Navigate to="/login" replace={true} />
  else return <Home />

}

export default Main