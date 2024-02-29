import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const RootLayout = () => {
    return (
        <>
            <Header />
            <main id="main">
                <Outlet />
            </main>
            
            <Footer />
        </>
    )
}

export default RootLayout