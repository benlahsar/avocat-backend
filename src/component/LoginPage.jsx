import React from "react";

function LoginPage() {
  return (
    <div className="flex min-h-screen">
  {/* Partie Gauche - Image */}
  <div
    className="hidden lg:flex w-1/2 items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('/img/balanc.jpeg ')", // CORRECT !!
    }}
  >
  </div>


      {/* Partie Droite - Formulaire */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-10">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#102C57]">Bienvenue </h1>
          <p className="text-gray-500 text-center mt-2">Veuillez vous connecter à votre compte</p>
        </div>
        <div className="max-w-md w-full mx-auto mt-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-bold text-gray-700 block">
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-[#102C57]"
                placeholder="Entrez votre Email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-bold text-gray-700 block">
                Mot de Passe
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-[#102C57]"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-[#102C57] focus:ring-[#102C57] border-gray-300 rounded" />
                <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
              </label>
              <a href="/forgot" className="text-sm text-[#102C57] hover:underline">
                Mot de passe oublié ?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#102C57] text-white rounded-lg hover:bg-[#243763] transition duration-300"
              >
                Connexion
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-sm mt-6">
            Vous n'avez pas de compte ? <a href="/regitrer" className="text-[#102C57] hover:underline">Créer un compte</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
