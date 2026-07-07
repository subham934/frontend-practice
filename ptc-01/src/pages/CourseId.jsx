import React from 'react'

import { useParams } from 'react-router'

const CourseId = () => {

    const param = useParams()

  return (
    <div className='main-page'>CourseId {param.Id} </div>
  )
}

export default CourseId

