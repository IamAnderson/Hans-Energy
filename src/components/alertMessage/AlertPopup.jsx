import React from 'react'
import './alertpopup.css'
import { AiOutlineClose } from 'react-icons/ai'

const AlertPopup = ({ removeAlert }) => {
  return (
    <div className='containeR'>
      <div className="messageBox" onClick={removeAlert}>
        <AiOutlineClose className='closePopup' onClick={removeAlert}/>
          <h3> Message Delivered</h3>
      </div>
    </div>
  )
}

export default AlertPopup