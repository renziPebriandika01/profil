import profileImage from './assets/gabimaru.jpg'
import backgroundImage from './assets/icelandic.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp  } from 'react-icons/fa';
import './App.css'
function App() {

  return (
  <div  className="bg-cover bg-center bg-opacity bg-fixed relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height:'1500px'  }}>
      <div className=" flex items-center justify-center" >
    <h1 className='text-lg font-bold text-white transform shadow-sm shadow-white-500'>BUKAN PROGRAMMER</h1>
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
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-300 border-4 rounded-lg shadow-lg shadow-transparent">
        <div className="flex justify-between">
          <div className="w-16 h-16 bg-red-500"></div>
          <div className="w-16 h-16 bg-white"></div>
          <div className="w-16 h-16 bg-green-500"></div>
        </div>
        <div className="flex justify-between">
          <div className="w-16 h-16 bg-yellow-500"></div>
          <div className="w-16 h-16 bg-blue-500"></div>
          <div className="w-16 h-16 bg-orange-500"></div>
        </div>
        <div className="flex justify-between">
          <div className="w-16 h-16 bg-green-500"></div>
          <div className="w-16 h-16 bg-yellow-500"></div>
          <div className="w-16 h-16 bg-red-500"></div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
