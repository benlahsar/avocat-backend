import React from "react";


const About = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-blue-900 text-white">
      {/* Image en arrière-plan */}
      <div className="absolute inset-0">
        <img
          src="/images/img1.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">À propos</h1>
        <p className="mt-2 text-lg">
          <span className="text-gray-300">Accueil</span> – <span className="font-semibold">À propos de nous</span>
        </p>
      </div>
    </section>
  );
};

export default About;