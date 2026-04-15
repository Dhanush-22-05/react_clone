import React, { useState } from "react";
import MoviesCard from "./MoviesCard";
import asuran from "../assets/asuran.jpg";
import jawan from "../assets/jawan.jpeg";
import kara from "../assets/kara.jpg";
import kaththu_vakkula from "../assets/kaththu vakkula.jpg";
import lik from "../assets/lik.jpg";
import lovetoday from "../assets/lovetoday.jpg";
import withlove from "../assets/withlove.jpg";
import youth from "../assets/youth.jpg";

export default function Home() {

    const [movies, setmovies] = useState([
        {
            title: "Asuran",
            image: asuran,
            desc: "Revenge, family, rural, intense, powerful",
            rating: "5"
        },
        {
            title: "Jawan",
            image: jawan,
            desc: "Action, mass, justice, stylish, emotional",
            rating: "4"
        },
        {
            title: "Kara",
            image: kara,
            desc: "Action, drama, rural, intense, emotional",
            rating: "4.5"
        },
        {
            title: "Kaathuvaakula Rendu Kaadhal",
            image: kaththu_vakkula,
            desc: "Love, triangle, comedy, quirky, emotional",
            rating: "10.4"
        },
        {
            title: "Lik",
            image: lik,
            desc: "Love, triangle, comedy, quirky, emotional",
            rating: "3.4"
        },
        {
            title: "Love Today",
            image: lovetoday,
            desc: "Love, triangle, quirky, emotional",
            rating: "5"
        },
        {
            title: "With Love",
            image: withlove,
            desc: "Struggle, ambition, sports, motivation, youth",
            rating: "2.3"
        },
        {
            title: "Youth",
            image: youth,
            desc: "Love, sacrifice, emotion, friendship, drama",
            rating: "4.6"
        },

    ])

    return (

        <div className="main-tag">

            <h1 className="title">MOST POPULAR MOVIES</h1>

            <div className="movies-list">
                {movies.map((m, index) => (
                    <MoviesCard key={index} {...m} />
                    
                ))}
             
            </div>
           
        </div>
    )
}