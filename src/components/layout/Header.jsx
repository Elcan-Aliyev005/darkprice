import React from 'react'
import { useLocation } from 'react-router-dom'
import { BsGrid } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setOffCanvas } from '../../store/layout';

function Header() {
    const location = useLocation()
    const dispatch = useDispatch()
    const showDrawer = () => {
        dispatch(setOffCanvas(true))
    };
    return (

        <header className=" text-[#fff] border-b border-[#333]  bg-[#1B1B1E] ">
            <div className="container flex items-center justify-between mx-auto ">
                <h3 className="text-[30px]">DarkPrice <span className='text-[12px]'>version 0.1</span> </h3>
                {location.pathname == "/" ? <div className="flex items-center gap-[40px]">
                    <div onClick={showDrawer}><BsGrid className='text-[20px]' /></div>
                </div> : null}
            </div>
        </header>
    )
}

export default Header