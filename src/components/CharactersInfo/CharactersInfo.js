import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";


const CharactersInfo = () => {
    const {people} = useParams()
    const [characters, setCharacters] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/characters/${people}`)
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
                <img src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`} alt="people"  />
            </div>
            <div className="col-5">
                <h2 className="CharactersInfo-title">
                    {characters.title}
                </h2>
                <ul className="element-desc">
                    <li>Birth year: {people.birth_year}</li>
                    <li>Height: {people.height}</li>
                    <li>Mass: {people.mass}</li>
                    <li>Gender: {people.gender}</li>
                    <li>Hair color: {people.hair_color}</li>
                    <li>Skin color: {people.skin_color}</li>
                </ul>
            </div>
        </div>

    );
};

export default CharactersInfo;