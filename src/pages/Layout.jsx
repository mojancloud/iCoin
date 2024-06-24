import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/pages.css";

const Layout = () => {
    return (
        <div className="layout">
            <div className="pages">
                <Outlet />
            </div>
            <Navbar />
        </div>
    );
}

export default Layout;
