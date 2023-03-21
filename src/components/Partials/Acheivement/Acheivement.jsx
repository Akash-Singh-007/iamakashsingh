import React from 'react'
import './Acheivement.css'

const Acheivement = ({numbers, text1, text2}) => {
  return (
    <div className="acheivement">
        <div className="circle">{numbers}</div>
        <span>{text1}</span>
        <span>{text2}</span>
    </div>
  )
}

export default Acheivement