import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'

export const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/recipes' element= {<Recipes/>}></Route>
            <Route path='/create-recipe' element= {<Create/>}></Route>
        </Routes>
    </div>
  )
}


