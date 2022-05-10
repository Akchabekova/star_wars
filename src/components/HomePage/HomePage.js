import React from 'react'
import './HomePage.css'
import characters from "../../assets/images/characters.jpg"
import films from "../../assets/images/films.jpg"
import species from "../../assets/images/species.jpg"
import starship from "../../assets/images/starships.jpg"
import vehicles from "../../assets/images/vehicles.jpg"
import planets from "../../assets/images/planets.jpg"
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className='row'>
           <div className="col-4">
          <Link to = "/characters">
              <div className="category-item">
                  <img src={characters} alt="" />
                  <h5 className="category-desc">Characters</h5>
              </div>
          </Link>
           </div>
           <div className="col-4">
            <Link to = "/films">
                <div className="category-item">
                    <img src={films} alt="" />
                    <h5 className="category-desc">Films</h5>
                </div>
            </Link>
           </div>
            <div className="col-4">
              <Link to="/species">
                  <div className="category-item">
                      <img src={species} alt="" />
                      <h5 className="category-desc">Species</h5>
                  </div>
              </Link>
           </div>
           <div className="col-4">
             <Link to="/starships">
                 <div className="category-item">
                     <img src={starship} alt="" />
                     <h5 className="category-desc">Starships</h5>
                 </div>
             </Link>
           </div>
           <div className="col-4">
             <Link to="/vehicles">
                 <div className="category-item">
                     <img src={vehicles} alt="" />
                     <h5 className="category-desc">Vechicles</h5>
                 </div>
             </Link>
           </div>
           <div className="col-4">
               <Link to="/planets">
                   <div className="category-item">
                       <img src={planets} alt="" />
                       <h5 className="category-desc">Planets</h5>
                   </div>
               </Link>
           </div>
        </div>
    );
};

export default HomePage;