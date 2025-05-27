import { useState } from "react";
import axios from 'axios'; // Assurez-vous d'importer axios pour les requêtes API

export default function DevenirMembre() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);  // Pour suivre l'état de chargement

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Empêcher la soumission si une requête est déjà en cours
    if (loading) return;

    setLoading(true);  // Début de l'envoi

    axios
      .post("http://127.0.0.1:8000/api/avocats", formData)
      .then(response => {
        console.log("Inscription réussie:", response.data);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);  // Message de succès pendant 3 secondes
      })
      .catch(error => {
        console.error("Erreur:", error);
        alert("Erreur lors de l'inscription");
      })
      .finally(() => {
        setLoading(false);  // Réinitialise l'état de chargement
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Bannière */}
      <div
        className="relative py-24 text-center bg-cover bg-center"
        style={{ backgroundImage: `url('/img/bal.jpeg')` }} // Assure-toi que l'image est bien dans public/img/
      >
        <div className="absolute inset-0 bg-sky-950 opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white"> DevenirMembre</h1>
          <p className="text-sm mt-2 text-gray-300">
            <a href="/" className="hover:underline">Accueil</a> {" > "}  DevenirMembre
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <div className="flex items-center justify-center py-12 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-md rounded-lg w-full max-w-md"
        >
          <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
            VOUS ÊTES AVOCAT ET VOUS SOUHAITEZ VOUS INSCRIRE À L’ANNUAIRE ?
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Nom*"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required
          />
          <div className="flex gap-3">
            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail*"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone*"
              value={formData.phone}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Écrire un message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-3 h-24"
          ></textarea>
          <div className="flex items-center justify-center my-4">
            <input type="checkbox" id="captcha" className="mr-2" required />
            <label htmlFor="captcha" className="text-sm text-gray-600">
              Je ne suis pas un robot
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#140051] text-white py-2 rounded hover:bg-indigo-100 transition"
            disabled={loading}  // Désactiver le bouton pendant le chargement
          >
            {loading ? "Envoi en cours..." : "S’INSCRIRE"}
          </button>
          {submitted && (
            <p className="mt-4 text-center text-green-600 font-semibold bg-green-100 p-2 rounded">
              Votre inscription a été envoyée avec succès !
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
