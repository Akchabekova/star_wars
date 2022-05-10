import React from 'react';
import HomePage from "./components/HomePage";
import {BrowserRouter,
        Route,
        Routes,
} from "react-router-dom";
import Characters from "./components/Characters";
import Films from "./components/Films";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import Planets from "./components/Planets";
import Header from "./components/Header";
import FilmInfo from "./components/FilmInfo";
import CharactersInfo from "./components/CharactersInfo";
import StarshipsInfo from "./components/StarshipsInfo";
import SpeciesInfo from "./components/SpeciesInfo";
import VehiclesInfo from "./components/VehiclesInfo";
import PlanetsInfo from "./components/PlanetsInfo";




const App = () => {
  return (
     <BrowserRouter>
         <div className="container">
             <Header />
           <Routes>
               <Route path ="/" element ={<HomePage/>} />
               <Route path ="/characters" element ={<Characters />} />
               <Route path ="/characters/:people" element ={<CharactersInfo />} />
               <Route path ="/films" element ={<Films />} />
               <Route path ="/films/:episode" element ={<FilmInfo/>} />
               <Route path ="/species" element ={<Species />} />
               <Route path ="/species/:item" element ={<SpeciesInfo />} />
               <Route path ="/starships" element ={<Starships />} />
               <Route path ="/starships/:item" element ={<StarshipsInfo />} />
               <Route path ="/vehicles" element ={<Vehicles/>} />
               <Route path ="/vehicles/:item" element ={<VehiclesInfo/>} />
               <Route path ="/planets" element ={<Planets/>} />
               <Route path ="/planets/:item" element ={<PlanetsInfo/>} />
           </Routes>
       </div>
     </BrowserRouter>
  );
};

export default App;
