import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";


const SpeciesInfo = () => {
    const {item} = useParams()
    const [species, setSpecies] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/species/${item}`)
            .then((res) =>{
                setSpecies(res.data)
                setIsLoading(false)

            })
    },[])

    if(isLoading){
        return <Spinner />
    }
    return (

        <div className="row">
            <div className="col-5">
                <img src={`https://starwars-visualguide.com/assets/img/species/${item}.jpg`} alt="species" className="info-img" />
            </div>
            <div className="col-5">
                <h2 className="info-title" >
                    {species.title}
                </h2>
                <ul className="element-desc">
                    <li className="info-desc">Classification : <span> {species.classification}</span></li>
                    <li className="info-desc">Designation :  <span>{species.designation}</span></li>
                    <li className="info-desc">Language : <span>{species.language}</span></li>
                    <li className="info-desc">Avg Lifespan : <span>{species.avarage_lifespan}</span></li>
                    <li className="info-desc">Avg Height : <span>{species.average_height}</span></li>
                    <li className="info-desc">Hair colors : <span>{species.hair_colors}</span></li>
                    <li className="info-desc">Skin colors : <span>{species.skin_colors}</span></li>
                    <li className="info-desc">Eye colors :<span>{species.eye_colors}</span></li>
                </ul>
            </div>
        </div>

    );
};

export default SpeciesInfo;