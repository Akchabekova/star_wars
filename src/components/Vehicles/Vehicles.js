import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";


const Vehicles = () => {
    const [vehicles,setVehicles] = useState({})
    const[page,setPage]=useState(0)
    useEffect(()=>{
        axios(`https://swapi.dev/api/vehicles?page=${page +1}`)
            .then((res)=>setVehicles(res.data))
    },[page])

    if(!vehicles.results) {
        return <Spinner />
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
                                <Link to={`/vehicles/${10 * page + index +1 }`}>
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${ 10 * page + index +1}.jpg`} alt="vehicles" className="element-img" />
                                    <h2 className="element-caption">{vehicles.name}</h2>
                                </div>
                                <div className="element-desc">

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

export default Vehicles;