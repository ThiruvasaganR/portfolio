import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../components/ThemeContext'; // Import the ThemeContext
import "./HomePage.css";
import thiru from "/src/assets/photos/thiru1.jpg"

const HomePage = () => {
  const { theme } = useContext(ThemeContext); // Get theme from context

  return (
    <div className={`flex justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="card card-side bg-red-100 text-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden max-w-4xl animate-slide-in">
        <figure className="flex-shrink-0">
          <img
            src={thiru}
            alt="Thiruvasagan R"
            className="w-96 h-full object-cover"
          />
        </figure>
        <div className="card-body p-8 flex flex-col justify-center">
          <h2 className="text-xl font-bold">Hello, I'm</h2>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mt-2">
            Thiruvasagan R
          </h1>
          <h2 className="text-2xl font-semibold">Web Developer</h2>
          <p className="text-lg-mt-4">Enthusiastic and passionate about creating stunning websites that deliver value.</p>
          <div className="home__social flex mt-4">
            {/* Social media links */}
          </div>
          <div className="card-actions mt-6">
            <button className="btn-btn-primary">
              <Link to="/about"> Get Started</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
