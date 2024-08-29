import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth.js'
import { login, logout } from "./store/authSlice.js"
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './Components'


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          // console.log(userData);
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div className="min-h-screen flex flex-col bg-neutral-500">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}


export default App
