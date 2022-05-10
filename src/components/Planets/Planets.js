import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Planets = () => {
    const [planets,setPlanets] = useState({})
    const[page,setPage]=useState(1)
    useEffect(()=>{
        axios(`https://swapi.dev/api/planets?page=${page}`)
            .then((res)=>setPlanets(res.data))
    },[page])

    if(!planets.results) {
        return <Spinner />
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
                                <Link to={`/planets/${10 * page + index +1 }`}>
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${ index + 1}.jpg`} alt="planets" className="element-img" />
                                    <h2 className="element-caption">{planets.name}</h2>
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

export default Planets;