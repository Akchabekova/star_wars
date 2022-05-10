import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";


const VehiclesInfo = () => {
    const {item} = useParams()
    const [vehicles, setVehicles] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://swapi.dev/api/vehicles/${item}`)
            .then((res) =>{
                setVehicles(res.data)
                setIsLoading(false)

            })
    },[])

    if(isLoading){
        return <Spinner />
    }
    return (

        <div className="row">
            <div className="col-5">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item}.jpg`} alt="vehicles" className="info-img" />
            </div>
            <div className="col-5">
                <h2 className="info-title" >
                    {vehicles.title}
                </h2>
                <ul className="element-desc">
                    <li className="info-desc">Model:<span>{vehicles.model}</span></li>
                    <li className="info-desc">Manufacturer: <span>{vehicles.manufacturer}</span></li>
                    <li className="info-desc">Class:<span>{vehicles.vehicle_class}</span></li>
                    <li className="info-desc">Cost:<span>{vehicles.cost_in_credits}</span></li>
                    <li className="info-desc">Speed:<span>{vehicles.max_atmosphering_speed}</span></li>
                    <li className="info-desc">Length:<span>{vehicles.length}</span></li>
                    <li className="info-desc">Cargo Capacity:<span>{vehicles.cargo_capacity}</span></li>
                    <li className="info-desc">Mimimum Crew:<span>{vehicles.crew}</span></li>
                    <li className="info-desc">Passengers:<span>{vehicles.passengers}</span></li>
                </ul>
            </div>
        </div>

    );
};

export default VehiclesInfo;