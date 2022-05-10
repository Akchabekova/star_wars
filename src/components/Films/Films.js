import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";



const Films = () => {
    const [films,setFilms] = useState({})
    const [isLoading, setIsLoading] =useState(true)

    useEffect(()=>{
        axios(`https://swapi.dev/api/films`)
            .then((res) =>{
                setFilms(res.data)
                 setIsLoading(false)
        })
    },[])

    if(isLoading) {
        return <Spinner />

    }
    return (
        <div>
            <div className="row">
                {
                    films?.results.map((film,index) => (
                        <div key={index} className="item-col">
                            <div className="element-item">
                                <Link to={`/films/${index + 1}`}>
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/films/${ index + 1}.jpg`} alt="episode" className="element-img" />
                                    <h2 className="element-caption">Episode {index+1}: {film.title}</h2>
                                </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Films;