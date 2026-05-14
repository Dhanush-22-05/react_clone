import React from "react";
import { FaStar } from "react-icons/fa";
import ColorChanger from "../component/ColorChanger";


export default function MoviesCard({ title, image, desc, rating }) {

    return (
        <div className="showw">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href="#">Read More...</a>    
            <p><FaStar />{rating}</p>
            <div className="button">
             <button>Download</button>
             <button>Watch Online</button>
             </div>
        </div>

    )
}