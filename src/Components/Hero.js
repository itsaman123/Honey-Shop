import React from 'react';
import heroimg from '../Components/Componimg/heroimg.png';
const HeroSection = () => {
  return (
    <>
      <section className="p-6 h-10rem dark:dark:text-gray-100 ">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className=" herotext w-full px-6 py-16 mt-11 rounded-md sm:px-12 md:px-16 xl:col-span-2">
            <h1 className="text-5xl font-extrabold dark:dark:text-gray-50 text-center">
              Honey kalash Pure <span className="text-yellow-600">Honey</span>
            </h1>
            <p className="my-8">
              <div className="font-medium dark:dark:text-gray-50">
                To be Youthful, energetic and healthy add daily in your food
                list. Gift of nature for healthy and happy life style
              </div>
            </p>
          </div>
          <img
            src={heroimg}
            alt="img"
            className="imgclass rem rounded-md xl:col-span-3"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
