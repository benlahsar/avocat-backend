import React from "react";

function ForgotPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Titre */}
        <h2 className="text-2xl font-bold text-center text-[#1F2937] mb-6">
          Mot de passe oublié
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-8 text-center">
          Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </p>

        {/* Formulaire */}
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Bouton Envoyer */}
          <button
            type="submit"
            className="w-full py-3 bg-[#102C57] text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Envoyer le lien de réinitialisation
          </button>
        </form>

        {/* Lien retour à la connexion */}
        <div className="mt-6 text-center">
          <a href="/login" className="text-sm text-indigo-600 hover:underline">
            Retour à la connexion
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPage;
