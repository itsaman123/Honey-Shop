import React from 'react';
import heroimg from '../Components/Componimg/heroimg.png';
const HeroSection = () => {
  return (
    <>
    {/* <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Honey kalash Pure <span className='text-yellow-600'>Honey</span> Online Shop</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">To be Youthful, energetic and healthy add daily in your food list. Gift of nature for healthy and happy life style</p>
            <a href="/" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Explore
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={heroimg} alt="mockup" className='rounded-lg hover:scale-105 transition-transform duration-300"'/>
        </div>                
    </div>
</section>
 */}






<section className="p-6 dark:bg-gray-700 h-10rem dark:dark:text-gray-100 dark:bg-gray-700">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-700">
			<span className="block mb-2 dark:dark:text-violet-400">Mamba design system</span>
			<h1 className="text-5xl font-extrabold dark:dark:text-gray-50">Build it with Mamba</h1>
			<p className="my-8">
				<span className="font-medium dark:dark:text-gray-50">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
			</p>
			
		</div>
		<img src={heroimg} alt="img" className="rem  w-full rounded-md xl:col-span-3 " />
	</div>
</section>












    </>
    );
};

export default HeroSection;
