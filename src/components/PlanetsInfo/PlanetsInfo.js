import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";


const PlanetsInfo = () => {
    const {item} = useParams()
    const [planets, setPlanets] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/planets/${item}`)
            .then((res) =>{
                setPlanets(res.data)
                setIsLoading(false)

            })
    },[])

    if(isLoading){
        return <Spinner />
    }
    return (

        <div className="row">
            <div className="col-5">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${item}.jpg`} alt="planets" className="info-img" />
            </div>
            <div className="col-5">
                <h2 className="info-title" >
                    {planets.title}
                </h2>
                <ul className="element-desc">
                    <li className="info-desc">Population:<span>{planets.population}</span></li>
                    <li className="info-desc">Rotation Period:<span>{planets.rotation_period}</span></li>
                    <li className="info-desc">Orbital Period:<span>{planets.orbital_period}</span></li>
                    <li className="info-desc">Diameter:<span>{planets.diameter}</span></li>
                    <li className="info-desc">Gravity:<span>{planets.gravity}</span></li>
                    <li className="info-desc">Terrain:<span>{planets.terrain}</span></li>
                    <li className="info-desc">Surface Water:<span>{planets.surface_water}</span></li>
                    <li className="info-desc">Climate:<span>{planets.climate}</span></li>

                </ul>
            </div>
        </div>

    );
};

export default PlanetsInfo;