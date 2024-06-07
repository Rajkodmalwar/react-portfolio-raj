import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white shadow-md">
      <div className="flex items-center">
        <img className="w-16 h-auto mx-4" src={logo} alt="logo" />
      </div>
      <div className="flex items-center space-x-6 text-2xl">
        <a href="https://www.linkedin.com/in/raj-k-0922a92b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " aria-label="LinkedIn" className="hover:text-blue-400 transition-colors duration-200">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Rajkodmalwar" aria-label="Github" className="hover:text-gray-400 transition-colors duration-200">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/raj_x145/" aria-label="Instagram" className="hover:text-pink-400 transition-colors duration-200">
          <FaInstagram />
        </a>
        <a href="https://x.com/RajKodmalwar?t=XDGBwMQiTdQXtEWlj-42Yw&s=09" aria-label="Twitter" className="hover:text-blue-300 transition-colors duration-200">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
