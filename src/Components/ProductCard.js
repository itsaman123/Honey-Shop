import React from 'react';

const ProductCard = () => {
  const posts = [
    {
      title: 'React Tailwind Card with Grid 1',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
    },
    {
      title: 'React Tailwind Card with Grid 2',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
    },
    {
      title: 'React Tailwind Card with Grid 3',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
    },
    {
      title: 'React Tailwind Card with Grid 4',
      img: 'https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png',
      content:
        'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content',
    },
  ];
  return (
    <>
      <div className="centerh1 text-center mt-5 mb-5 text-4xl">Products</div>
      <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700 mx-auto block" />

      <div className="grid gap-2 lg:grid-cols-4 ">
        {posts.map((items, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300" key={key}>
            <img
              className="object-cover w-full h-48 hover:scale-110 transition-transform duration-300"
              src={items.img}
              alt="img"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-yellow-600">
                {items.title}
              </h4>
              <p className="mb-2 leading-normal">{items.content}</p>
              <button className="px-4 py-2 text-sm text-yellow-100 bg-yellow-500 rounded shadow">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
