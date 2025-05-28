import { useState } from "react";
import { Link } from "react-router-dom";


const fakeAvocats = Array.from({ length: 76 }, (_, i) => ({
  id: i + 1,
  name: `Avocat ${i + 1}`,
  city: ["Rabat", "Casablanca", "Fès", "Tanger","Marrakech","Agadir"][i % 6],
}));

function Avocats() {
  const [search, setSearch] = useState("");
  const [ville, setVille] = useState("");
  const [page, setPage] = useState(1);

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

      {/* Avocats grid */}
      <div className="container mx-auto mt-10 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {paginated.map(avocat => (
    <Link
      to={`/avocats/${avocat.id}`}
      key={avocat.id}
      className="group bg-white border border-gray-200 rounded-2xl shadow hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center p-6"
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
    </Link>
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
    </div>
  );
}

export default Avocats;
