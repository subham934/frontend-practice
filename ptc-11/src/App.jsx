import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './components/Home'
import Form from './components/Form'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Mobile from './components/Mobile'
import Laptop from './components/Laptop'
import Course from './components/Course'
import CourseDetail from './components/CourseDetail'

const App = () => {
  return (
    <div className='bg-black w-full h-screen text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} >
        <Route path="/service/mobile" element={<Mobile />} />
        <Route path="lappy" element={<Laptop />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App

