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
                <NavLink to="/boost" className="navbar-items" activeClassName="active" onClick={handleClick}>
                    <RocketLaunchRounded className="material-icons" />
                    <p>boost</p>
                </NavLink>
                <NavLink exact to="/" className="navbar-items" activeClassName="active" onClick={handleClick}>
                    <HomeRounded className="material-icons" />
                    <p>iCoin</p>
                </NavLink>
                <NavLink to="/earn" className="navbar-items" activeClassName="active" onClick={handleClick}>
                    <PaidRounded className="material-icons" />
                    <p>Earn</p>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
