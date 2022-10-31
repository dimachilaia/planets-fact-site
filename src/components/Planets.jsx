import React from 'react'
import { useParams } from 'react-router-dom';


const Planets = ({data}) => {
  const datas = useParams()
    console.log(datas)

  return (
    <div>planets</div>
  )
}

export default Planets