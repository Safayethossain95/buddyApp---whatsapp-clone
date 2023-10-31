import React from 'react'
import './MainBox.scss'
import ContactList from '../contactList/ContactList'
import MesssageRightBox from '../messagerightBox/MesssageRightBox'
const MainBox = () => {
  return (
    <>
        <div className='mainbox'>
            <ContactList/>
            <MesssageRightBox/>
        </div>
    </>
  )
}

export default MainBox