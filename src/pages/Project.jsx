import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

const Project = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center p-10 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Project-1 */}
      <div id='slide1' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-300${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src="./src/assets/photos/swiggy.png"
              alt="Swiggy"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Swiggy Clone</h2>
            <p>Web Development</p>
            <div className="card-actions justify-end">
              <a href='https://swiggy-my.netlify.app/'>
              <button className="btn btn-primary">View Project</button></a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-2 */}
      <div id='slide2' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-300${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src="./src/assets/photos/elephants-sunset.jpg"
              alt="Elephant Article"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Elephant Article</h2>
            <p>Website</p>
            <div className="card-actions justify-end">
              <a href='https://sunset-elephant.netlify.app'>
              <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat for other projects with the same conditional classes */}

      {/* Project-3 */}
      <div id='slide3' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src="./src/assets/photos/cat.jpg"
              alt="Random Color"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cat Gun Safety</h2>
            <p>Using JavaScript Only</p>
            <div className="card-actions justify-end">
              <a href='https://gun-safety.netlify.app'>
              <button className="btn btn-primary">View Project</button>

              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-4 */}
      <div id='slide4' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src="./src/assets/photos/living.jpeg"
              alt="Stone Paper Scissor Game"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Living the social life</h2>
            <p>Fun Game using JavaScript</p>
            <div className="card-actions justify-end">
              <a href='https://the-social-life.netlify.app'>
              <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-5 */}
      <div id='slide5' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-300${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src="./src/assets/photos/office.jpeg"
              alt="Set Timeout"
              className="w-full h-48 object-cover"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dave's Dave & Designers</h2>
            <p>SetTimeout Using Class</p>
            <div className="card-actions justify-end">
              <a href='https://team-office.netlify.app'>
              <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project-6 */}
      <div id='slide6' className={`card transform transition-transform duration-300 ease-in-out hover:scale-105 border border-gray-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="card glass w-80">
          <figure>
            <img
              src="./src/assets/photos/mac.jpg"
              alt="Add List Using Use State"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Apple laptop's</h2>
            <p>Using React useState Hook</p>
            <div className="card-actions justify-end">
              <a href='https://neon-moxie-be0c11.netlify.app'>
              <button className="btn btn-primary">View Project</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
