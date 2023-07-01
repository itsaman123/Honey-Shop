import React from 'react'

const HeroCard = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-4 py-8 md:flex md:items-center bg-white">
    <div className="md:w-1/2">
      <img
        className="mx-auto md:mx-0 md:mr-12 mb-6 md:mb-0 w-2/3 rounded-lg hover:scale-110 transition-transform duration-300"
        src="https://images.pexels.com/photos/33260/honey-sweet-syrup-organic.jpg?auto=compress&cs=tinysrgb&w=600"
        alt="Hero"
      />
    </div>
    <div className="md:w-1/2">
      <h1 className="text-white text-4xl mb-4 text-blue-900 hover:text-yellow-500 transition-colors duration-300">
        Welcome to My Hero Page
      </h1>
      <p className="text-gray-900 text-xl text-blue-900 transition-colors duration-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ultricies eros, et placerat enim. Nullam tempus
        mauris vel sem malesuada, vitae convallis tellus tincidunt.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mt-4 rounded transition-colors duration-300">
        Learn More
      </button>
    </div>
  </div>
</div>

  )
}

export default HeroCard