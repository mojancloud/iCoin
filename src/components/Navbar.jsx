import React from "react";
import { NavLink } from "react-router-dom";
import { RocketLaunchRounded, HomeRounded, PaidRounded } from "@mui/icons-material";
import "../css/navbar.css";

const Navbar = () => {
    // Function to handle click and trigger vibration
    const handleClick = () => {
        // Check if the device supports vibration
        if ("vibrate" in navigator) {
            // Vibrate for 50ms
            navigator.vibrate(50);
        }
    };

    return (
        <nav className="navbar-container">
            <div className="navbar">
                <NavLink 
                    to="/iCoin/boost/" 
                    className={({ isActive }) => isActive ? "navbar-items active" : "navbar-items"} 
                    onClick={handleClick}
                >
                    <RocketLaunchRounded className="material-icons" />
                    <p>boost</p>
                </NavLink>
                <NavLink 
                    to="/iCoin/" 
                    end // This ensures exact match for the root path
                    className={({ isActive }) => isActive ? "navbar-items active" : "navbar-items"} 
                    onClick={handleClick}
                >
                    <HomeRounded className="material-icons" />
                    <p>iCoin</p>
                </NavLink>
                <NavLink 
                    to="/iCoin/earn/" 
                    className={({ isActive }) => isActive ? "navbar-items active" : "navbar-items"} 
                    onClick={handleClick}
                >
                    <PaidRounded className="material-icons" />
                    <p>Earn</p>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
