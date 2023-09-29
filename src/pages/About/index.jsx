import React from 'react';
import "./style.scss";
import { NavLink, Outlet } from 'react-router-dom';

const index = () => {
    return (
        <>
            <ul className='d-flex w-25 justify-content-around mt-5 list-unstyled'>
                <li> <NavLink className={({isActive})=> isActive ? "bg-warning p-3 rounded-pill" : ""} to="/about/tab1"> TAB1 </NavLink> </li>
                <li> <NavLink className={({isActive})=> isActive ? "bg-warning p-3 rounded-pill" : ""} to="/about/tab2"> TAB2</NavLink> </li>
            </ul>
            <h1>About</h1>   
            <Outlet />
        </>
    );
};

export default index;