import React, {useEffect, useState} from 'react';
import axios from "axios";

const Films = () => {
    const [films,setFilms] = useState({})
    const[page,setPage]=useState(1)
    useEffect(()=>{
        axios(`https://swapi.dev/api/films?page=${page}`)
            .then((res)=>setFilms(res.data))
    },[page])

    if(!films.results) {
        return "loading..."
    }
    return (
        <div>
            <div className="pagination">
                {
                    Array(Math.ceil(films.count/10)).fill(0).map((buttonNum,idx)=>(
                        <button key={idx} className="pagination-btn" onClick={() => setPage(idx+1)}>{idx+1}</button>
                    ))
                }
            </div>

            <div className="row">
                {
                    films?.results.map((people,index) => (
                        <div key={index} className="col-4">
                            <div className="element-item">
                                <div className="element-title">
                                    <img src={`https://starwars-visualguide.com/assets/img/films/${ index + 1}.jpg`} alt="episode" className="element-img" />
                                    <h2 className="element-caption">{films.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Films;