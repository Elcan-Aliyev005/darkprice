import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardMenu from '../components/ui/admin/menu/Menu'

function AdminLayout() {
    return (
        <>
            <div className='h-[100vh] flex  w-full'>
                <DashboardMenu />
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>


        </>
    )
}

export default AdminLayout