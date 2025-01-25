import React from 'react'
import {useDispatch} from 'react-redux' 
import authService from '../../appwrite/auth.js'
import {logout} from '../../store/authSlice.js'

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
      <button className="btn btn-error"
      onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn