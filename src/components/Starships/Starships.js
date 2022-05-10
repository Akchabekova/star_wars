import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";

const Starships = () => {
    const [starships,setStarships] = useState({})
    const[page,setPage]=useState(1)
    useEffect(()=>{
        axios(`https://swapi.dev/api/starships?page=${page}`)
            .then((res)=>setStarships(res.data))
    },[page])

    if(!starships.results) {
        return <Spinner />
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
                                <Link to={`/starships/${10 * page + index +1 }`}>
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/starships/${index +1 }.jpg`} alt="starship" className="element-img" />
                                    <h2 className="element-caption">{starships.name}</h2>
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

export default Starships;












