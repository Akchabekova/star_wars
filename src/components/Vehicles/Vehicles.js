import React, {useEffect, useState} from 'react';
import axios from "axios";

const Vehicles = () => {
    const [vehicles,setVehicles] = useState({})
    const[page,setPage]=useState(1)
    useEffect(()=>{
        axios(`https://swapi.dev/api/vehicles?page=${page}`)
            .then((res)=>setVehicles(res.data))
    },[page])

    if(!vehicles.results) {
        return "loading..."
    }
    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(vehicles.count/10)).fill(0).map((buttonNum,idx)=>(
                        <button key={idx} className="pagination-btn" onClick={() => setPage(idx+1)}>{idx+1}</button>
                    ))
                }
            </div>

            <div className="row">
                {
                    vehicles?.results.map((vehicles,index) => (
                        <div key={index} className="col-4">
                            <div className="element-item">
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${ index + 1}.jpg`} alt="person" className="element-img" />
                                    <h2 className="element-caption">{vehicles.name}</h2>
                                </div>
                                <ul className="element-desc">
                                    <li>Model:{vehicles.model}</li>
                                    <li>Manufacturer:{vehicles.manufacturer}</li>
                                    <li>Class:{vehicles.vehicle_class}</li>
                                    <li>Cost:{vehicles.cost_in_credits}</li>
                                    <li>Speed:{vehicles.max_atmosphering_speed}</li>
                                    <li>Length:{vehicles.length}</li>
                                    <li>Cargo Capacity:{vehicles.cargo_capacity}</li>
                                    <li>Mimimum Crew:{vehicles.crew}</li>
                                    <li>Passengers:{vehicles.passengers}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Vehicles;