import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <>
    {/* <div className='text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase'>AuthLayout</div> */}
    <Outlet/>
    </>
  )
}

export default AuthLayout