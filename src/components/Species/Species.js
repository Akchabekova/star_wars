import React, {useEffect, useState} from 'react';
import axios from "axios";

const Species = () => {
    const [species,setSpecies] = useState({})
    const[page,setPage]=useState(1)
    useEffect(()=>{
        axios(`https://swapi.dev/api/species?page=${page}`)
            .then((res)=>setSpecies(res.data))
    },[page])

    if(!species.results) {
        return "loading..."
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
                        <div key={index} className="col-4">
                            <div className="element-item">
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/species/${ index + 1}.jpg`} alt="" className="element-img" />
                                    <h2 className="element-caption">{species.name}</h2>
                                </div>
                                <ul className="element-desc">
                                    <li>Classification: {species.classification}</li>
                                    <li>Designation: {species.designation}</li>
                                    <li>Language: {species.language}</li>
                                    <li>Avg Lifespan: {species.avarage_lifespan}</li>
                                    <li>Avg Height: {species.average_height}</li>
                                    <li>Hair colors: {species.hair_colors}</li>
                                    <li>Skin colors: {species.skin_colors}</li>
                                    <li>Eye colors: {species.eye_colors}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Species;