import React from 'react'

const ContactForm = () => {
  return (
  //   <div className="container mx-auto mt-8">
  //   <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
  //   <form className="max-w-md mx-auto">
  //     <div className="mb-4">
  //       <label
  //         className="block text-gray-700 text-sm font-bold mb-2"
  //         htmlFor="name"
  //       >
  //         Name
  //       </label>
  //       <input
  //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //         id="name"
  //         type="text"
  //         placeholder="Enter your name"
  //       />
  //     </div>
  //     <div className="mb-4">
  //       <label
  //         className="block text-gray-700 text-sm font-bold mb-2"
  //         htmlFor="email"
  //       >
  //         Email
  //       </label>
  //       <input
  //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //         id="email"
  //         type="email"
  //         placeholder="Enter your email"
  //       />
  //     </div>
  //     <div className="mb-4">
  //       <label
  //         className="block text-gray-700 text-sm font-bold mb-2"
  //         htmlFor="message"
  //       >
  //         Message
  //       </label>
  //       <textarea
  //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //         id="message"
  //         placeholder="Enter your message"
  //       ></textarea>
  //     </div>
  //     <div className="flex items-center justify-center">
  //       <button
  //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  //         type="button"
  //       >
  //         Submit
  //       </button>
  //     </div>
  //   </form>
  // </div>
  <>
  

<section class="bg-black dark:bg-gray-900 text-white">
  <div className="centerh1 text-center mb-5 text-4xl">Contact Us</div>
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700 mx-auto block" />
  
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <p class="max-w-xl text-lg text-center">
          At the same time, the fact that we are wholly owned and totally
          independent from manufacturer and other group control gives you
          confidence that we will only recommend what is right for you.
        </p>

        <div class="mt-8 text-center">
          <a href="/" class="text-2xl font-bold text-pink-600 ">
            0151 475 4450
          </a>

          <address class="mt-2 not-italic">
            282 Kevin Brook, Imogeneborough, CA 58517
          </address>
        </div>
      </div>

      <div class="rounded-lg text-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg text-black border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg text-black border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full text-black rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          
          <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-black text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-block w-full rounded-lg text-yellow-100 bg-yellow-500 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  
  </>
  )
}

export default ContactForm