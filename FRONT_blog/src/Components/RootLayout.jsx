import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Heder'

function RootLayout() {
  return (
    <div>
        <Header/>
        <div className='min-h-screen mx-32'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout