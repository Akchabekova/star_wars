import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";


const Characters = () => {
    const [characters,setCharacters] = useState({})
    const[page,setPage]=useState(0)
    useEffect(()=>{
        axios(`https://swapi.dev/api/people?page=${page +1}`)
            .then((res)=>setCharacters(res.data))
    },[page])

    if(!characters.results) {
        return <Spinner />
    }
    return (
        <div>
            <div className="pagination">
            {
                Array(Math.ceil(characters.count/10)).fill(0).map((buttonNum,idx)=>(
                    <button key={idx} className="pagination-btn" onClick={() => setPage(idx)}>{idx+1}</button>
                ))
            }
            </div>

        <div className="row">
            {
            characters?.results.map((people,index) => (
                <div key={index} className="item-col">
                    <Link to="/characters/4">
              <div className="element-item">

                  <div className="element-title">
                  <img src={`https://starwars-visualguide.com/assets/img/characters/${ 10 * page + index +1 }.jpg`} alt="person" className="element-img" />
                  <h2 className="element-caption">{people.name}</h2>
                  </div>
                  <ul className="element-desc">
                      {/*<li>Birth year: {people.birth_year}</li>*/}
                      {/*<li>Height: {people.height}</li>*/}
                      {/*<li>Mass: {people.mass}</li>*/}
                      {/*<li>Gender: {people.gender}</li>*/}
                      {/*<li>Hair color: {people.hair_color}</li>*/}
                      {/*<li>Skin color: {people.skin_color}</li>*/}
                  </ul>
              </div>
                    </Link>
                </div>


            ))
            }
        </div>
        </div>
    );
};

export default Characters;