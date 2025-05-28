import React from "react";
import { FaBalanceScale } from "react-icons/fa"; // Import de l'icône de balance

function ServicesAvocats() {
  return (
    <div>
      {/* Bannière avec image de fond */}
      <Banner />

      {/* Contenu Principal */}
      <main className="container mx-auto px-6 py-10">
        {/* Image */}
        <ServiceImage />

        {/* Titre et Description */}
        <ServiceTitle />
        <ServiceDescription />

        {/* Liste des Services */}
        <ServiceList />
      </main>
    </div>
  );
}

function Banner() {
  return (
    <div
      className="relative py-24 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/img/bal.jpeg')`, // Correction ici
      }}
    >
      <div className="absolute inset-0 bg-sky-900 opacity-20"></div> {/* légère transparence */}
      
      {/* Contenu de la bannière */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white">Nos Services</h1>
        <p className="text-sm mt-2 text-gray-300">
          <a href="/" className="hover:underline">
            Accueil
          </a>{" "}
          {" > "} Avocat
        </p>
      </div>
    </div>
  );
}


// Sous-composant : Image du service
function ServiceImage() {
  return (
    <div className="flex justify-center">
      <img
        src="public\img\avo.jpeg"
        alt="Avocate au bureau"
        className="rounded-lg shadow-2xl w-full md:w-3/4 lg:w-1/2 transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

// Sous-composant : Titre du service
function ServiceTitle() {
  return (
    <h2 className="text-3xl font-bold mt-8 text-center text-[#49198E]">
      Prise en charge et création de site web pour Avocats
    </h2>
  );
}

// Sous-composant : Description du service
function ServiceDescription() {
  return (
    <p className="mt-6 text-lg text-gray-700 text-center max-w-2xl mx-auto">
      <strong className="text-[#49198E]">📌 Formation, Conseil et Assistance Digitale pour Avocats :</strong>
      <br />
      Notre site est dédié aux avocats intègres, compétents et réactifs souhaitant
      assurer leur présence digitale. Nous vous proposons des services pour
      améliorer et renforcer votre activité.
    </p>
  );
}

// Sous-composant : Liste des services
function ServiceList() {
  const services = [
    "Prise en charge et création de site web pour Avocats.",
    "Formation, Conseil et Assistance Digitale pour Avocats.",
    "Digitalisation de l’avocat.",
    "Représentation et Défense devant les Tribunaux.",
    "Négociation et rédaction de contrats.",
    "Consultation et accompagnement en Gestion Digitale.",
    "Sécurisation des données et protection du Data.",
    "Marketing Digital pour avocats.",
  ];

  return (
    <ul className="mt-8 space-y-4 max-w-2xl mx-auto">
      {services.map((service, index) => (
        <li key={index} className="flex items-start space-x-3">
          <FaBalanceScale className="text-[#1301de] text-xl mt-1 flex-shrink-0" /> {/* Icône de balance */}
          <span className="text-gray-700 text-lg">{service}</span>
        </li>
      ))}
    </ul>
  );
}

export default ServicesAvocats;