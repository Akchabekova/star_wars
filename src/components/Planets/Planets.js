import React, {useEffect, useState} from 'react';
import axios from "axios";

const Planets = () => {
    const [planets,setPlanets] = useState({})
    const[page,setPage]=useState(1)
    useEffect(()=>{
        axios(`https://swapi.dev/api/planets?page=${page}`)
            .then((res)=>setPlanets(res.data))
    },[page])

    if(!planets.results) {
        return "loading..."
    }
    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(planets.count/10)).fill(0).map((buttonNum,idx)=>(
                        <button key={idx} className="pagination-btn" onClick={() => setPage(idx+1)}>{idx+1}</button>
                    ))
                }
            </div>

            <div className="row">
                {
                    planets?.results.map((planets,index) => (
                        <div key={index} className="col-4">
                            <div className="element-item">
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${ index + 1}.jpg`} alt="person" className="element-img" />
                                    <h2 className="element-caption">{planets.name}</h2>
                                </div>
                                <ul className="element-desc">
                                    <li>Population:{planets.population}</li>
                                    <li>Rotation Period:{planets.rotation_period}</li>
                                    <li>Orbital Period:{planets.orbital_period}</li>
                                    <li>Diameter:{planets.diameter}</li>
                                    <li>Gravity:{planets.gravity}</li>
                                    <li>Terrain:{planets.terrain}</li>
                                    <li>Surface Water:{planets.surface_water}</li>
                                    <li>Climate:{planets.climate}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Planets;