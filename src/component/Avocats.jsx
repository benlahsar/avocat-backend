import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const firstAvocat = {
  id: 1,
  name: "Said Naoui",
  city: "Casablanca",
  phone: "0522624404",
  fix: "022624404",
  address: "453, bd ibn tachfine 20300, Casablanca",
  email: "said.naoui@email.com",
  image: "/img/avocat1.png",
  description: "Nos avocats mettent à votre disposition leur expertise et leur engagement. Que ce soit pour des conseils juridiques, une assistance stratégique ou une défense juridique, nous sommes là pour vous accompagner à chaque étape de votre parcours juridique. Vos intérêts sont notre priorité, et nous travaillons sans relâche pour les protéger avec la plus grande compétence et dévouement.",
  social: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
    instagram: "#"
  }
};

// Listes pour génération aléatoire
const prenoms = ["Youssef", "Sara", "Omar", "Fatima", "Mehdi", "Laila", "Samir", "Nadia", "Karim", "Salma"];
const noms = ["El Amrani", "Benali", "Fassi", "Bennani", "El Idrissi", "Alaoui", "Mouline", "Tazi", "Berrada", "El Fassi"];
const villes = ["Rabat", "Casablanca", "Fès", "Tanger", "Marrakech", "Agadir"];
const images = [
  "/img/logoo.png"
];
const descriptions = [
  "Expert en droit civil et commercial.",
  "Spécialiste en droit pénal.",
  "12 ans d'expérience en droit du travail.",
  "Conseil en droit des affaires.",
  "Accompagnement en droit de la famille.",
  "Avocat plaidant devant toutes les juridictions.",
  "Conseiller juridique pour entreprises.",
  "Expertise en droit immobilier.",
  "Assistance en droit international.",
  "Consultant en droit fiscal."
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const fakeAvocats = [
  firstAvocat,
  ...Array.from({ length: 75 }, (_, i) => {
    const prenom = randomFrom(prenoms);
    const nom = randomFrom(noms);
    const city = randomFrom(villes);
    const name = `${prenom} ${nom}`;
    const phone = `05${Math.floor(10000000 + Math.random() * 89999999)}`;
    const fix = `05${Math.floor(10000000 + Math.random() * 89999999)}`;
    const address = `${Math.floor(Math.random() * 1000)}, rue ${randomFrom(noms)}, ${city}`;
    const email = `${prenom.toLowerCase()}.${nom.toLowerCase()}@email.com`;
    const image = randomFrom(images);
    const description = randomFrom(descriptions);
    return {
      id: i + 2,
      name,
      city,
      phone,
      fix,
      address,
      email,
      image,
      description,
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#"
      }
    };
  })
];

function Avocats() {
  const [search, setSearch] = useState("");
  const [ville, setVille] = useState("");
  const [page, setPage] = useState(1);
  const [selectedAvocat, setSelectedAvocat] = useState(null);
  // Formulaire contact
  const [form, setForm] = useState({ nom: "", email: "", tel: "", sujet: "", message: "" });
  useEffect(() => { setForm({ nom: "", email: "", tel: "", sujet: "", message: "" }); }, [selectedAvocat]);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); alert("Message envoyé avec succès !"); setForm({ nom: "", email: "", tel: "", sujet: "", message: "" }); };

  const avocatsPerPage = 15;
  const filtered = fakeAvocats.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) &&
    a.city.toLowerCase().includes(ville.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / avocatsPerPage);
  const paginated = filtered.slice((page - 1) * avocatsPerPage, page * avocatsPerPage);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Banner */}
      <div className="bg-[url('public//img/bal.jpeg')] bg-cover bg-center h-52 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Avocats</h1>
          <p className="text-sm">Accueil / Recherche</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-[-40px]">
        <div className="bg-indigo-400 text-white p-6 rounded-md shadow-md w-full max-w-3xl">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
             Rechercher un Avocat
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Taper un mot clé..."
              className="p-2 rounded-md text-indigo-950 w-full"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <input
              type="text"
              placeholder="Rechercher par ville..."
              className="p-2 rounded-md text-black w-full"
              value={ville}
              onChange={e => setVille(e.target.value)}
            />
            <button className="bg-indigo-700 px-4 py-2 rounded-md hover:bg-blue-600 transition">
              RECHERCHER
            </button>
          </div>
        </div>
      </div>

      {/* Affichage conditionnel fiche ou liste */}
      {!selectedAvocat ? (
        <>
          {/* Avocats grid */}
          <div className="container mx-auto mt-10 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {paginated.map(avocat => (
              <div
                key={avocat.id}
                className="group bg-white border border-gray-200 rounded-2xl shadow hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center p-6 cursor-pointer"
                onClick={() => setSelectedAvocat(avocat)}
              >
                <img
                  src="/img/logoo.png"
                  alt="justice"
                  className="w-20 h-20 mb-4 rounded-full border-2 border-blue-900"
                />
                <p className="text-sm text-gray-500">{avocat.city}</p>
                <h3 className="font-semibold text-blue-900 text-lg group-hover:text-indigo-600 transition">
                  {avocat.name}
                </h3>
                <span className="text-2xl text-blue-900 mt-2 group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 mb-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-8 h-8 rounded text-sm font-medium ${
                  page === i + 1 ? "bg-blue-800 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        // Fiche personnalisée de l'avocat sélectionné
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center relative">
            {/* Partie gauche : Image et nom */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <img
                src={selectedAvocat.image || "/img/logoo.png"}
                alt={selectedAvocat.name}
                className="w-48 h-48 rounded-full border-4 border-blue-900 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-blue-900">{selectedAvocat.name}</h2>
            </div>
            {/* Partie centre : Description */}
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <p className="mb-4 text-gray-700 text-left">{selectedAvocat.description || "Description non renseignée."}</p>
            </div>
            {/* Partie droite : Infos */}
            <div className="w-full md:w-1/3 bg-white shadow p-6 rounded-xl border border-blue-100 flex flex-col gap-2">
              <div className="border-b-2 border-blue-200 pb-2 mb-2">
                <div className="text-gray-500 text-sm">Téléphone</div>
                <div className="font-bold text-blue-900">{selectedAvocat.phone || "-"}</div>
              </div>
              <div className="border-b-2 border-blue-200 pb-2 mb-2">
                <div className="text-gray-500 text-sm">Fix</div>
                <div className="font-bold text-blue-900">{selectedAvocat.fix || "-"}</div>
              </div>
              <div className="border-b-2 border-blue-200 pb-2 mb-2">
                <div className="text-gray-500 text-sm">Adresse</div>
                <div className="font-bold text-blue-900">{selectedAvocat.address || "-"}</div>
              </div>
              <div className="flex gap-3 mt-2">
                <a href={selectedAvocat.social?.twitter} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded hover:bg-blue-100"><i className="fab fa-twitter text-xl text-blue-400"></i></a>
                <a href={selectedAvocat.social?.facebook} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded hover:bg-blue-100"><i className="fab fa-facebook text-xl text-blue-700"></i></a>
                <a href={selectedAvocat.social?.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded hover:bg-blue-100"><i className="fab fa-linkedin text-xl text-blue-600"></i></a>
                <a href={selectedAvocat.social?.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded hover:bg-blue-100"><i className="fab fa-instagram text-xl text-pink-500"></i></a>
              </div>
            </div>
            <button
              onClick={() => setSelectedAvocat(null)}
              className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800 transition"
            >
              Retour
            </button>
          </div>
          {/* Formulaire de contact */}
          <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white rounded-xl shadow p-8 mt-8">
            <h3 className="text-center text-gray-700 font-semibold mb-6 tracking-widest">CONTACTEZ CET AVOCAT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Nom*" className="p-3 border rounded w-full" />
              <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="E-mail*" className="p-3 border rounded w-full" />
              <input name="tel" value={form.tel} onChange={handleChange} required placeholder="Téléphone*" className="p-3 border rounded w-full" />
              <input name="sujet" value={form.sujet} onChange={handleChange} placeholder="Sujet" className="p-3 border rounded w-full" />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Écrire un message" className="p-3 border rounded w-full mb-4 min-h-[100px]" />
            {/* Captcha factice */}
            <div className="flex items-center mb-6">
              <input type="checkbox" required className="mr-2" id="captcha" />
              <label htmlFor="captcha" className="text-gray-600 text-sm">Je ne suis pas un robot</label>
            </div>
            <button type="submit" className="w-full bg-indigo-700 text-white py-3 rounded font-bold hover:bg-indigo-900 transition">ENVOYER UN MESSAGE</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Avocats;
