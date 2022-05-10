import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";


const CharactersInfo = () => {
    const {people} = useParams()
    const [characters, setCharacters] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/people/${people}`)
            .then((res) =>{
                setCharacters(res.data)
                setIsLoading(false)

            })
    },[])

    if(isLoading){
        return <Spinner />
    }
    return (

        <div className="row">
            <div className="col-5">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${people}.jpg`} alt="people"  />
            </div>
            <div className="col-5">
                <h2 className="info-title">
                    {characters.title}
                </h2>
                <ul className="element-desc">
                    <li className="info-desc">Birth year :<span> {characters.birth_year}</span></li>
                    <li className="info-desc">Height : <span>{characters.height}</span></li>
                    <li className="info-desc">Mass :<span> {characters.mass}</span></li>
                    <li className="info-desc">Gender : <span>{characters.gender}</span></li>
                    <li className="info-desc">Hair color : <span>{characters.hair_color}</span></li>
                    <li className="info-desc">Skin color : <span>{characters.skin_color}</span></li>
                </ul>
            </div>
        </div>

    );
};

export default CharactersInfo;