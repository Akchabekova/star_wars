import React, {useEffect, useState} from 'react';
import axios from "axios";

const Starship = () => {
    const [starships,setStarships] = useState({})
    const[page,setPage]=useState(1)
    useEffect(()=>{
        axios(`https://swapi.dev/api/starships?page=${page}`)
            .then((res)=>setStarships(res.data))
    },[page])

    if(!starships.results) {
        return "loading..."
    }
    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(starships.count/10)).fill(0).map((buttonNum,idx)=>(
                        <button key={idx} className="pagination-btn" onClick={() => setPage(idx+1)}>{idx+1}</button>
                    ))
                }
            </div>

            <div className="row">
                {
                    starships?.results.map((starships,index) => (
                        <div key={index} className="col-4">
                            <div className="element-item">
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/starships/${index +1 }.jpg`} alt="starship" className="element-img" />
                                    <h2 className="element-caption">{starships.name}</h2>
                                </div>
                                <ul className="element-desc">
                                    <li>Model:{starships.model}</li>
                                    <li>Manufacturer:{starships.manufacturer}</li>
                                    <li>Class:{starships.starships_class}</li>
                                    <li>Cost:{starships.cost_in_credits}</li>
                                    <li>Speed:{starships.max_atmosphering_speed}</li>
                                    <li>Hyperdrive Rating:{starships.hyperdrive_rating}</li>
                                    <li>MGLT:{starships.MGLT}</li>
                                    <li>Length:{starships.length}</li>
                                    <li>Cargo Capacity:{starships.cargo_capacity}</li>
                                    <li>Mimimum Crew:{starships.crew}</li>
                                    <li>Passengers:{starships.passengers}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Starship;












