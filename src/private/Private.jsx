import React, { useEffect, useState } from 'react';
import "./style.scss";
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from '../hooks/useAuth';

const Private = () => {

    const auth = useAuth();

    return (
        <>
            {auth ? <>

                <Navbar />

                <main>
                    <div className="container">
                        <Outlet />
                    </div>
                </main>

                <Footer />

            </> : <Navigate to="/login" />}
        </>
    );
};

export default Private;