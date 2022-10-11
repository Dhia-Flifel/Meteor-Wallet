import React, { useState } from 'react'
import { ContactsCollection } from '../api/ContactCollections'

export const ContactForm = () => { 
    const initialState = {email: '', name: '',imageUrl:''}
    const [userData, setUserData] = useState(initialState)
    const {email, name, imageUrl} = userData
    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
      }
    const saveContact = () => {
      console.log(userData)
      ContactsCollection.insert({ name, email, imageUrl});
      setUserData(value= '')
      
    }

    return (
    <form>
    <div>
      <label htmlFor='name'>
         Name
      </label>
      <input type="text" onChange={handleChangeInput} value={name} name="name"/>
    </div>
    <div>
      <label htmlFor='email'>
        Email
      </label>
      <input type="email"  onChange={handleChangeInput} value={email} name="email" />
    </div>
    <div>
      <label htmlFor='imageUrl'>
        Image URL
      </label>
      <input type="text" id="imageUrl"  onChange={handleChangeInput} value={imageUrl} name="imageUrl" />
    </div>
    <div>
      <button onClick={saveContact}>Save</button>
    </div>
  </form>
)}