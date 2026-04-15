import React from "react";
import { FaBolt, FaSearch, FaBell } from "react-icons/fa";
import profileImg from "../assets/dhanush-profile.jpeg";


export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="logo">
                    <FaBolt className="icon" /> <span>clever</span>
                </div >
                     <div className="nav-link">
                    <p>Home</p>
                    <p>Product</p>
                    <p>Features</p>
                    <p>Pricing</p>
                     </div>
                <div className="nav-right">
                    <span><FaSearch/></span>
                    <span><FaBell /></span>
                    <img src={profileImg} alt="profile" className="profile" />
                     
                </div>
            </div>
        </nav>
    )
}