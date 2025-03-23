import  Header  from '../Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <Header />
            <main className="bg-[#1B1B1E] flex items-center min-h-[calc(100vh-46px)] ">
                {<Outlet />}
            </main >
        </>
    )
}

export default MainLayout