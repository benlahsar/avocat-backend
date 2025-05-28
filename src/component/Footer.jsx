import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Icônes modernes

function Footer() {
  return (
    <footer className="bg-[#140051] text-white py-10">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* À propos */}
        <div>
          <img src="public\img\logoo.png" alt="VotreAvocat.ma" className="mb-2 w-20" />
          <p className="text-sm text-gray-300">
            Avocati.ma est un site édité par l’incubateur Groupe Wib. Il permet de trouver les coordonnées des avocats marocains, y compris leurs adresses e-mail et numéros de téléphone fixe. Ce site est le premier annuaire des avocats au Maroc.
          </p>
        </div>

        {/* Liens de navigation */}
        <div>
          <FooterSection title="Explore">
            <FooterLink href="#">À propos</FooterLink>/
            <FooterLink href="#">Contact</FooterLink>
          </FooterSection>

          <FooterSection title="Liens" className="mt-6">
            <FooterLink href="#">Accueil</FooterLink>/
            <FooterLink href="#">Avocat</FooterLink>/
            <FooterLink href="#">Client</FooterLink>/
            <FooterLink href="#">Actualité</FooterLink>.
          </FooterSection>
        </div>

        {/* Contact */}
        <div>
          <FooterSection title="Contact">
            <p className="text-sm text-gray-300">
              📧{" "}
              <a href="mailto:contact@Avocati.ma" className="hover:text-indigo-700 transition-colors">
                contact@Avocati.ma
              </a>
            </p>
            <p className="text-sm text-gray-300 mt-2">
              📍 3 rue M Avenue, 20500 Marrakech, Maroc
            </p>
          </FooterSection>

          <FooterSection title="Appelez à tout moment" className="mt-6">
            <p className="text-xl font-bold text-purple-300 hover:text-indigo-700 transition-colors">
              +212 05 22 77 81 58
            </p>
          </FooterSection>

          {/* Réseaux sociaux */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.facebook.com/?locale=fr_FR" icon={<FaFacebook />} />
              <SocialIcon href="https://twitter.com/" icon={<FaTwitter />} />
              <SocialIcon href="https://fr.linkedin.com/" icon={<FaLinkedin />} />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © 2024 Copyrights par Avocati.ma
      </div>
    </footer>
  );
}

// Composant réutilisable pour les sections du footer
function FooterSection({ title, children, className = "" }) {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

// Composant réutilisable pour les liens du footer
function FooterLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-gray-300 hover:text-indigo-700 transition-colors">
      {children}
    </a>
  );
}

// Composant réutilisable pour les icônes des réseaux sociaux
function SocialIcon({ href, icon }) {
  return (
    <a href={href} className="text-gray-300 hover:text-indigo-700 transition-colors">
      {icon}
    </a>
  );
}

export default Footer;