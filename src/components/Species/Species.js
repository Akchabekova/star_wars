import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Species = () => {
    const [species,setSpecies] = useState({})
    const[page,setPage]=useState(0)
    useEffect(()=>{
        axios(`https://swapi.dev/api/species?page=${page + 1}`)
            .then((res)=>setSpecies(res.data))
    },[page])

    if(!species.results) {
        return < Spinner />
    }
    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(species.count/10)).fill(0).map((buttonNum,idx)=>(
                        <button key={idx} className="pagination-btn" onClick={() => setPage(idx+1)}>{idx+1}</button>
                    ))
                }
            </div>

            <div className="row">
                {
                    species?.results.map((species,index) => (
                        <div key={index} className="item-col">
                            <div className="element-item">
                                <Link to={`/species/${10 * page + index +1 }`}>
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/species/${ 10 * page + index +1  }.jpg`} alt="" className="element-img" />
                                    <h2 className="element-caption">{species.name}</h2>
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

export default Species;