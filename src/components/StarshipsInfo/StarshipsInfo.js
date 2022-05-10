import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";


const StarshipsInfo = () => {
    const {item} = useParams()
    const [starships, setStarships] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/starships/${item}`)
            .then((res) =>{
                setStarships(res.data)
                setIsLoading(false)

            })
    },[])

    if(isLoading){
        return <Spinner />
    }
    return (

        <div className="row">
            <div className="col-5">
                <img src={`https://starwars-visualguide.com/assets/img/starships/${item}.jpg`} alt="starships" className="info-img" />
            </div>
            <div className="col-5">
                <h2 className="info-title" >
                    {starships.title}
                </h2>
                <ul className="element-desc">
                    <li className="info-desc">Model:<span>{starships.model}</span></li>
                    <li className="info-desc">Manufacturer:<span>{starships.manufacturer}</span></li>
                    <li className="info-desc">Class:<span>{starships.starships_class}</span></li>
                    <li className="info-desc">Cost:<span>{starships.cost_in_credits}</span></li>
                    <li className="info-desc">Speed:<span>{starships.max_atmosphering_speed}</span></li>
                    <li className="info-desc">Hyperdrive Rating:<span>{starships.hyperdrive_rating}</span></li>
                    <li className="info-desc">MGLT:<span>{starships.MGLT}</span></li>
                    <li className="info-desc">Length:<span>{starships.length}</span></li>
                    <li className="info-desc">Cargo Capacity:<span>{starships.cargo_capacity}</span></li>
                    <li className="info-desc">Mimimum Crew:<span>{starships.crew}</span></li>
                    <li className="info-desc">Passengers:<span>{starships.passengers}</span></li>
                </ul>
            </div>
        </div>

    );
};

export default StarshipsInfo;