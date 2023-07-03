// import React, { useState } from 'react';
// import axios from 'axios';
// const Fetchnews = () => {
//   const [news, setNews] = useState([]);
//   const fetchnews = () => {
//     axios
//       .get(
//         'https://newsapi.org/v2/top-headlines?country=in&apiKey=9f0ae6ae5c8d4dec85ccfecbe8673101'
//       )
//       .then((response) => {
//         setNews(response.data.article);
//       });
//   };
//   return (
//     <>
//       <div className="container my-3">
//         <div className="row">
//           <div className="col-4">
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={fetchnews}
//             >
//               FetchNews
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           {news.map((value) => {
//             return (
//               <div className="col-4">
//                 <div className="card" style={{ width: '18rem;' }}>
//                   <img
//                     src={value.urlToImage}
//                     alt="igm"
//                     className="card-img-top"
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{value.title}</h5>
//                   </div>
//                   <p className="card-text">{value.description}</p>
//                   <a href="/" className="btn btn-primary">
//                     Main
//                   </a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Fetchnews;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import './NewsCard.css';

// const NewsCard = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           'https://newsapi.org/v2/top-headlines?country=us&apiKey=9f0ae6ae5c8d4dec85ccfecbe8673101'
//         );
//         setNews(response.data.articles);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="news-container">
//       {news.map((article, index) => (
//         <div key={index} className="card">
//           <img src={article.urlToImage} alt={article.title} className="card-image" />
//           <div className="card-content">
//             <h3 className="card-heading">{article.title}</h3>
//             <p className="card-description">{article.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsCard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const NewsCard = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           'https://newsapi.org/v2/top-headlines?country=us&apiKey=9f0ae6ae5c8d4dec85ccfecbe8673101'
//         );
//         setNews(response.data.articles);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         {news.map((article, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card">
//               <img src={article.urlToImage} alt={article.title} className="card-img-top" />
//               <div className="card-body">
//                 <h5 className="card-title">{article.title}</h5>
//                 <p className="card-text">{article.description}</p>
//                 <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsCard;

import React, { useState } from 'react';
import axios from 'axios';

function Fetchnews() {
  const [news, setNews] = useState([]);
  const fetchnews = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=8b555c737bb04575843aadc660394238'
      )
      .then((response) => {
        //console.log(response);
        setNews(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row ">
          <div class="col-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={fetchnews}
            >
              Fetchnews
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          {news.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: '18rem;' }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="/" className="btn btn-primary">
                      Main
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Fetchnews;
