import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";


const FilmInfo = () => {
    const {episode} = useParams()
    const [film, setFilm] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/films/${episode}`)
            .then((res) =>{
                setFilm(res.data)
                setIsLoading(false)

            })
    },[])

    if(isLoading){
        return <Spinner />
    }
    return (

        <div className="row">
            <div className="col-5">
                <img src={`https://starwars-visualguide.com/assets/img/films/1.jpg`} alt="episode"  />
            </div>
        <div className="col-5">
            <h2 className="filmInfo-title">
                {film.title}
            </h2>
            <h4 className="filmInfo-desc">Date Created: <span>{film.created}</span></h4>
            <h4 className="filmInfo-desc">Director: <span> {film.director}</span></h4>
            <h4 className="filmInfo-desc">Producer(s): <span>{film.producer}</span></h4>
            <h4 className="filmInfo-desc">Opening Crawl:<span> {film.opening_crawl}</span></h4>
        </div>
        </div>

    );
};

export default FilmInfo;