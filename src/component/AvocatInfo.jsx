import React from "react";

const AvocatInfo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texte */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4">
            Bienvenue sur Avocati.ma
          </h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Le premier répertoire professionnel regroupant des avocats au Maroc. 
            Notre site simplifie la mise en relation avec des avocats marocains qualifiés 
            en fournissant leurs coordonnées complètes, y compris leurs adresses e-mail 
            et numéros de téléphone fixe.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Notre objectif principal est de vous offrir l'accès à des avocats compétents
            capables de vous fournir des services juridiques de qualité sur l'ensemble 
            du territoire marocain et à l'étranger a letranger  .
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">À la pointe des avancées technologiques, les avocats de notre plateforme assurent une communication digitale sécurisée, rapide et constante. Ils sont disponibles quotidiennement pour répondre à diverses questions juridiques en les contactant directement. Ils sont prêts à vous accueillir dans leurs cabinets si nécessaire, vous guidant tout au long de vos démarches. Nos avocats possèdent l'expertise requise pour vous représenter devant les tribunaux compétents, garantissant ainsi la défense rigoureuse et professionnelle de vos intérêts.

</p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>NB :</strong> Si vous envisagez de confier votre affaire à l'un de nos 
            avocats, nous vous encourageons à les contacter via notre service de support.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/img/img2.jpg"
            alt="Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AvocatInfo;
