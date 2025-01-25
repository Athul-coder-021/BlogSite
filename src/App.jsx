import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from './store/authSlice.js'
import authServices from './appwrite/auth.js'
import {Header,Footer} from './components/index.js'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authServices.getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }))//will pass object to reducer
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
       <Header/>
       <main>
        {/* Outlet ko idar daalo after configuring react router dom */}
        <Outlet></Outlet>
       </main>
       <Footer/>
      </div>
    </div>
  ) : null
}

export default App
