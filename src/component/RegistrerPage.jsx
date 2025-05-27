import { useEffect, useState } from "react";
import api, { getCsrfToken } from "../api/api";

function RegisterPage() {
  const [formData, setFormData] = useState();

  const handleSubmit = async () => {
    try {
      await getCsrfToken();
      const response = await api.post("/api/login", formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Titre */}
        <h2 className="text-2xl font-bold text-center text-[#1F2937] mb-6">
          Créer un compte
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-8 text-center">
          Remplissez les informations pour créer votre compte.
        </p>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom Complet
            </label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="cin"
              className="block text-sm font-medium text-gray-700"
            >
              CIN
            </label>
            <input
              type="text"
              id="cin"
              placeholder="CIN"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Adresse E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              placeholder="Votre mot de passe"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Confirmation Mot de passe */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirmez votre mot de passe"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Bouton Créer */}
          <button
            type="submit"
            className="w-full py-3 bg-[#102C57] text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Créer le compte
          </button>
        </form>

        {/* Lien retour à la connexion */}
        <div className="mt-6 text-center">
          <a href="/login" className="text-sm text-indigo-600 hover:underline">
            Vous avez déjà un compte ? Connectez-vous
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
