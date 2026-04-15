import React from "react";
import { FaBolt, FaSearch, FaBell } from "react-icons/fa";
import profileImg from "../assets/dhanush-profile.jpeg";


export default function Navbar({setpage,page}) {

    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="logo">
                    <FaBolt className="icon" /> <span>MOVIESDA</span>
                </div >
                     <div className="nav-link">
                    <p onClick={() => setpage("home")} >
                        Home
                        </p>
                    <p onClick={() => setpage("movies")}>
                        Movieslist
                        </p>
                    <p>AboutUs</p>
                    <p>ContactUS</p>
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