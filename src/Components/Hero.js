import React from 'react'
import hero1 from '../images/hero-1.jpg'
import { Link } from 'react-router-dom';

function Hero() {
    const heroStyle = {
        backgroundImage: `url(${hero1})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div>
    <section className="relative custom-background" style={heroStyle}>
      <div className="absolute inset-0 bg-white-overlay"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your

            <strong className="block font-extrabold text-rose-700">
              Campus Hostel.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl">
          Join us on a journey to help you discover the best suitable hostel for you to enjoy your stay at campus
          Immerse yourself in our warm, welcoming atmosphere and connect with fellow adventurers. 

          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              <Link to='/register'>Sign Up</Link>
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
             <Link to='/login'>Login</Link>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero