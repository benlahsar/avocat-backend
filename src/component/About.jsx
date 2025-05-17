import React from "react";
import AvocatInfo from "./AvocatInfo";  // Importer AvocatInfo

function About() {
  return (
    <div>
      <div
        className="relative py-24 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/img/bal.jpeg')`, 
        }}
      >
        <div className="absolute inset-0 bg-sky-950 opacity-10"></div> {/* légère transparence */}
        
        {/* Contenu de la bannière */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">À propos</h1>
          <p className="text-sm mt-2 text-gray-300">
            <a href="/" className="hover:underline">
              Accueil
            </a>{" "}
            {" > "} À propos
          </p>
        </div>
      </div>
      
      {/* Ajouter la section AvocatInfo ici */}
      <AvocatInfo />
    </div>
  );
}

export default About;
