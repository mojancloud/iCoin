import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <div className="layout">
            <Outlet />
            <Navbar />
        </div>
    );
}

export default Layout;
