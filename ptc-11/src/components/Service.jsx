import React from 'react'
import { Link } from 'react-router'

const Service = () => {
  return (
    <div className="flex gap-3 items-center mt-20 justify-center">
        <Link to="/service/mobile" className='underline'>Mobile</Link> <br />
        <Link to="/service/lappy" className='underline'>Laptop</Link> <br />
    </div>
  )
}

export default Service
