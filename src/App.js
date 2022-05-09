import React from 'react';
import HomePage from "./components/HomePage";
import {BrowserRouter,
        Route,
        Routes,
} from "react-router-dom";
import Characters from "./components/Characters";
import Films from "./components/Films";
import Species from "./components/Species";
import Starship from "./components/Starship";
import Vehicles from "./components/Vehicles";
import Planets from "./components/Planets";
import Header from "./components/Header";
import FilmInfo from "./components/FilmInfo";
import CharactersInfo from "./components/CharactersInfo";




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
               <Route path ="/starship" element ={<Starship />} />
               <Route path ="/vehicles" element ={<Vehicles/>} />
               <Route path ="/planets" element ={<Planets/>} />
           </Routes>
       </div>
     </BrowserRouter>
  );
};

export default App;
