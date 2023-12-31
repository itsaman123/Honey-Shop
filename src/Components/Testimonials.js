import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <div class="testimonial-1 py-4 md:py-12 bg-gray-900 text-white">
        <div className="centerh1 text-center mb-5 text-4xl">Testimonials</div>
        <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700 mx-auto block" />
        <div class="container mx-auto px-4">
          <div class="md:flex md:flex-wrap md:-mx-4 mb-4">
            <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
              <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                  {/* <img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover"> */}
                </div>
                <div>
                  <p class="text-gray-600">
                    "It really saves me time and effort. FWR Bootstrap Blocks is
                    exactly what our business has been lacking. FWR Bootstrap
                    Blocks was worth a fortune to my company. FWR Bootstrap
                    Blocks has really helped our business. I'm good to go."
                  </p>
                  <div class="text-gray-900 font-bold uppercase mt-6">
                    - Jesse D.
                  </div>
                  <div class="text-gray-600">Apple</div>
                </div>
              </div>
            </div>

            <div class="md:w-1/2 md:px-4 mt-6 md:mt-0">
              <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                  {/* <img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover"> */}
                </div>
                <div>
                  <p class="text-gray-600">
                    "Needless to say we are extremely satisfied with the
                    results. Keep up the excellent work. Your company is truly
                    upstanding and is behind its product 100%. Thanks guys, keep
                    up the good work!"
                  </p>
                  <div class="text-gray-900 font-bold uppercase mt-6">
                    - Annabell M.
                  </div>
                  <div class="text-gray-600">Microsoft</div>
                </div>
              </div>
            </div>

            <div class="md:w-1/2 md:px-4 mt-6">
              <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                  {/* <img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover"> */}
                </div>
                <div>
                  <p class="text-gray-600">
                    "FWR Bootstrap Blocks is exactly what our business has been
                    lacking. FWR Bootstrap Blocks is both attractive and highly
                    adaptable. Man, this thing is getting better and better as I
                    learn more about it."
                  </p>
                  <div class="text-gray-900 font-bold uppercase mt-6">
                    - Candace H.
                  </div>
                  <div class="text-gray-600">Google</div>
                </div>
              </div>
            </div>

            <div class="md:w-1/2 md:px-4 mt-6">
              <div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                  {/* <img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover"/> */}
                </div>
                <div>
                  <p class="text-gray-600">
                    "This is simply unbelievable! I use FWR Bootstrap Blocks
                    often. You've saved our business! No matter where you go,
                    FWR Bootstrap Blocks is the coolest, most happening thing
                    around!"
                  </p>
                  <div class="text-gray-900 font-bold uppercase mt-6">
                    - Joe H.
                  </div>
                  <div class="text-gray-600">Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
