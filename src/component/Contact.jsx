import React from "react";

const Contact = () => {
  return (
    <>
      {/* Bannière */}
      <div
        className="relative py-24 text-center bg-cover bg-center"
        style={{ backgroundImage: `url('/img/bal.jpeg')` }}
      >
        <div className="absolute inset-0 bg-sky-950 opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">Contact - Nous</h1>
          <p className="text-sm mt-2 text-gray-300">
            <a href="/" className="hover:underline">Blog</a> {" > "} Contact - Nous
          </p>
        </div>
      </div>

      {/* Section Contact */}
      <section className="flex flex-col md:flex-row items-center justify-center p-10 bg-gray-50">
        {/* Carte Google Maps - Tribunal Marrakech */}
        <div className="w-full md:w-1/2 h-80">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.750375229447!2d-8.000000000000001!3d31.634506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafedb2a1234567%3A0xabcdef1234567890!2sTribunal%20de%20Première%20Instance%20Marrakech!5e0!3m2!1sfr!2sma!4v1234567890123"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Infos Contact */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-900">Avocati.ma</h2>
          <p className="text-gray-700 mt-4">
            Retrouvez ici toutes les informations concernant concernat  Avocati.ma
          </p>

          <div className="mt-6 bg-white shadow-lg rounded-lg p-4">
            <p className="text-gray-900 font-semibold">Appelez à tout moment</p>
            <p className="text-blue-600 text-lg font-bold">05 98 78 78 64</p>

            <p className="text-gray-900 font-semibold mt-4">Envoyer un e-mail</p>
            <p className="text-blue-600 font-bold">Avocati@.magmail.com</p>

            {/* Réseaux Sociaux */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
