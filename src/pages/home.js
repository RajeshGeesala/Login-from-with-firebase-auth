import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import app from '../fiebase'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const auth = getAuth()
    const Navigate = useNavigate() ;
    //useState  for user 
    const [authUser ,setAuthUser] = useState(null)
    //useEffect for data setting
    useEffect(()=>{
    const listen = onAuthStateChanged(auth , (user) => {
        if (user) {
            setAuthUser(user)
        }else {
            setAuthUser(null)
        }
    })

    },[])  
    const Logout = (event) =>{
        event.preventDefault()
           signOut(auth).then(() =>{
            alert("Logged out Succesfully ")
               Navigate("/")
           }).catch((error) => {
            console.log(error)
           })
    } ;
   
  return (
    <>
    <div className='App'>Home</div>
    <div>{authUser? authUser.firstName : ".."}</div>
        <div>{authUser? authUser.email : ""}</div>
    <button onClick={Logout}> logout </button>
    </>
  )
}

export default Home