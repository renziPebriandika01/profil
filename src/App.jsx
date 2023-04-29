import { useEffect, useState } from "react";
import profileImage from './assets/gabimaru.jpg'
import backgroundImage from './assets/icelandic.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp  } from 'react-icons/fa';
import './App.css'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const parallaxStyle = {
    transform: `translate(-50%, ${scrollPosition * 1.3}px)`,
  };
  return (
  <div  className="bg-cover bg-center  relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height:'1000px'  }}>
      <div className="parallax" style={parallaxStyle}>
    <h1>PARALLAX TALUA E</h1>
      </div>

    <div className="flex flex-col items-center">

      
    <div className=" w-full text-center mt-10 ">
    </div>
     <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full mb-4"
        />
       <p className="text-center text-gray-700 font-medium mt-4 mb-4">Renzi Febriandika</p>
       
        <div className="flex flex-col items-center space-y-4 ">
        <div className="bg-white rounded-lg shadow-md p-6">
          <a href="https://www.facebook.com/renzi.febriandika.948" className="flex items-center space-x-2">
            <FaFacebook className="text-blue-500 w-8 h-8" />
            <span className="text-gray-700 font-medium">Facebook</span>
          </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
          <a href="https://www.instagram.com/nzy31a/?igshid=ZDdkNTZiNTM%3D" className="flex items-center space-x-2">
            <FaInstagram className="text-pink-500 w-8 h-8" />
            <span className="text-gray-700 font-medium">Instagram</span>
          </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
          <a href="https://www.linkedin.com/in/renzi-febriandika-843437272/" className="flex items-center space-x-2 me-2">
            <FaLinkedin className="text-blue-700 w-8 h-8" />
            <span className="text-gray-700 font-medium">Linkedin</span>
          </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
          <a href="https://wa.me/082383246251" className="flex items-center space-x-2">
            <FaWhatsapp className="text-green-500 w-8 h-8" />
            <span className="text-gray-700 font-medium ">Whatsapp</span>
          </a>
          </div>
          </div>          
      </div>   
    </div>
    </div>
  );
}

export default App;
