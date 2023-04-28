import React, { useState } from "react";
import profileImage from './gabimaru.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaMoon  } from 'react-icons/fa';
import {CiLight} from 'react-icons/ci'

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
      setIsDarkMode(!isDarkMode);
    };
  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>

    <div className="flex flex-col items-center">

    <button onClick={handleDarkModeToggle} className="absolute top-4 right-4">
        {isDarkMode ? <CiLight className="w-10 h-10 "/> : <FaMoon className="w-10 h-10"/>}
      </button>
      
    <div className=" w-full text-center pb-4 ">
     <p className="  text-gray-500 text-sm">
    &copy; 2023 Renzi Febriandika. All Rights Reserved.
     </p>
    </div>
     <div className="bg-white rounded-lg shadow-md p-6 ">
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
            <span className="text-gray-700 font-medium">Whatsapp</span>
          </a>
          </div>
          </div>          
      </div>   
    </div>
    </div>
  );
}

export default App;
