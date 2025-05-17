import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const sliderImages = [
    "https://media.istockphoto.com/id/863944878/photo/gavel-in-courtroom-working-office-of-lawer-legislation.jpg?s=612x612&w=0&k=20&c=7IIyGifFznV4oLIKUvqhTD7IubVolctKQBH06ZjLJUo=",
    "https://i.pinimg.com/736x/e3/17/c6/e317c65978505a8264081f1de92a6fd2.jpg",
  ];

  const serviceImages = [
    "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
    "https://i.pinimg.com/736x/51/2a/03/512a0395b12a43655d4584bf2d659d21.jpg",
    "https://i.pinimg.com/736x/e9/58/e9/e958e931f1970075ccab4456b39bd843.jpg",
  ];

  const blogImages = [
    "https://i.pinimg.com/736x/c1/4d/9b/c14d9b9352d06cf2e1a0fead7d132f00.jpg",
    "https://i.pinimg.com/736x/28/73/35/287335416a74be6641884d733115741c.jpg",
    "https://i.pinimg.com/736x/c2/2c/69/c22c690aee5989a0769725c00485567d.jpg",
    "https://i.pinimg.com/736x/a7/e9/03/a7e903668257fdaa20a0ff02645cc31b.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const lawyers = [
    { name: "Abdelati Boujemaa" },
    { name: "Said Zarzar" },
    { name: "Abderrafia Thami El Alami" },
    { name: "Naciri Bennani" },
  ];

  const articles = [
    { id: 1, img: blogImages[0], title: "Comment choisir le bon avocat pour votre affaire ?" },
    { id: 2, img: blogImages[1], title: "Les dernières réformes juridiques au Maroc" },
    { id: 3, img: blogImages[2], title: "Conseils pour une consultation juridique réussie" },
    { id: 4, img: blogImages[3], title: "Droits des employés : ce que vous devez savoir" },
  ];
  
  
  const services = [
    { img: serviceImages[0], title: "Consultation en ligne", description: "Discutez avec un avocat depuis chez vous." },
    { img: serviceImages[1], title: "Trouvez votre Avocat", description: "Accédez à une liste d'avocats qualifiés." },
    { img: serviceImages[2], title: "Actualité Juridique", description: "Restez informé des dernières actualités juridiques." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Hero section */}
      <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden bg-indigo-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={sliderImages[currentImage]}
            src={sliderImages[currentImage]}
            alt="background"
            className="absolute w-full h-full object-cover opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl font-bold">Trouvez l'avocat qu'il vous faut</h1>
          <p className="mt-4 text-lg">Recherchez facilement et rapidement tous les avocats au Maroc.</p>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          let href = "#";
          if (index === 0) href = "/contact";
          else if (index === 1) href = "/avocats";
          else if (index === 2) href = "/blog";

          return (
            <motion.a
              key={index}
              href={href}
              className="relative group p-6 border rounded-lg shadow-lg text-center overflow-hidden cursor-pointer bg-white hover:bg-indigo-700 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="mx-auto mb-4 w-24 h-24 object-contain rounded-full bg-gray-100 p-2 group-hover:opacity-0 transition duration-500"
              />
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h2>
              <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 text-lg font-medium transition-opacity duration-500">
                {service.description}
              </p>
            </motion.a>
          );
        })}
      </section>

      {/* Mission Section liée à /about */}
      <div
        className="relative bg-cover bg-center text-white text-center py-20 px-4"
        style={{ backgroundImage: `url('/img/bali.jpeg')` }}
      >
        <div className="absolute inset-0 bg-indigo-900 opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">
            Notre mission est de protéger vos affaires & bien plus encore
          </h1>
          <Link
            to="/about"
            className="mt-4 inline-block bg-indigo-700 px-6 py-2 rounded-md text-white font-semibold hover:bg-blue-600 transition"
          >
            À PROPOS DE NOUS
          </Link>
        </div>
      </div>

      {/* Lawyers */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">LES DERNIERS AVOCATS RÉFÉRENCÉS</h2>
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-5xl text-yellow-500">⚖️</span>
              </div>
              <p className="text-gray-700 font-medium">Maître</p>
              <h3 className="text-lg font-semibold text-blue-900">{lawyer.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

     {/* Blog */}
<section className="py-12 px-4 text-center">
  <h2 className="text-2xl font-semibold text-gray-800">Les derniers articles de blog</h2>
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
    {articles.map((article, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
        <img src={article.img} alt={article.title} className="w-full h-40 object-cover mb-4 rounded-md shadow" />
        <h3 className="text-lg font-semibold text-blue-900">{article.title}</h3>
        <Link
          to={`/blog/${article.id}`}
          className="mt-2 text-indigo-700 hover:underline block"
        >
          EN SAVOIR PLUS →
        </Link>
      </div>
    ))}
  </div>
</section>


    </main>
  );
}

export default Home;
