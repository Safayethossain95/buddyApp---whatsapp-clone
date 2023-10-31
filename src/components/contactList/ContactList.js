import React from 'react'
import './ContactList.scss'
import Header from './header/Header'
import SearchBar from './searchbar/SearchBar'
import TotalContactList from './totalContactList/TotalContactList'
const ContactList = () => {
  return (
    <>
        <div className='contactlistbox'>
            <Header/>
            <SearchBar/>
            <TotalContactList/>
        </div>
    </>
  )
}

export default ContactList