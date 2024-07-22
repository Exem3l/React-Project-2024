import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './News.css';

const newsData = [
    {
      category: 'NEWS',
      title: 'AORUS Invites Gamers to Experience Next-Gen PC Gaming Hardware at Gamescom 2023',
      date: 'AUGUST 21 2023 | WORLD-WIDE',
      image: 'src/News/First.jpeg',
      tag: 'Event',
    },
    {
      category: 'NEWS',
      title: 'GIGABYTE AORUS Collaborates with AMD and Marvel on an Exclusive Wallpaper & Custom Mod Giveaway',
      date: 'MAY 11 2023 | RUSSIAN',
      image: 'src/News/Second.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: "AORUS 16 Expands Line-up of GIGABYTE's Gaming Products",
      date: 'MAY 2 2023 | RUSSIAN',
      image: 'src/News/Third.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: 'GIGABYTE announces GeForce RTX 4070',
      date: 'APRIL 12 2023 | RUSSIAN',
      image: 'src/News/Forth.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: 'GIGABYTE A620 series - The Smart Choice for AMD AM5 Platform',
      date: 'MARCH 31 2023 | RUSSIAN',
      image: 'src/News/Fifth.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: 'AORUS Gen5 10000 SSD with Performance of No Less Than 10 GB/s!',
      date: 'FEBRUARY 6 2023 | RUSSIAN',
      image: 'src/News/Sixth.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: 'Enjoy the Evolution Speed with AORUS Gen4 7300 SSD!',
      date: 'JANUARY 9 2023 | RUSSIAN',
      image: 'src/News/Seventh.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: 'Rigorous Color Standard for Perfection: GIGABYTE Unveils New AERO Creator Laptop',
      date: 'JANUARY 4 2023 | RUSSIAN',
      image: 'src/News/Eighth.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: 'GIGABYTE Launches the GeForce RTX 4070 Ti Series Graphics Cards',
      date: 'JANUARY 4 2023 | RUSSIAN',
      image: 'src/News/Ninth.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: ' New AORUS and AERO Laptops – The Highest Level of Performance and GIGABYTE’s Signature Technologies',
      date: 'JANUARY 4 2023 | RUSSIAN',
      image: 'src/News/Tenth.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: 'Unlock the Z790-like DDR5 7600 Memory Performance with GIGABYTE B760 Motherboards',
      date: 'JANUARY 3 2023 | RUSSIAN',
      image: 'src/News/Eleventh.jpeg',
      tag: 'NEWS',
    },
    {
      category: 'NEWS',
      title: 'GIGABYTE Launches AMD Radeon™ RX 7900 Series Graphics Cards',
      date: 'DECEMBER 9 2022 | RUSSIAN',
      image: 'src/News/Twelfth.jpeg',
      tag: 'NEWS',
    }
  ];

const ITEMS_PER_PAGE = 6;

const News = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentNews = newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container">
      <h1 className="title">NEWS</h1>
      <div className="news-grid">
        {currentNews.map((news, index) => (
          <div key={index} className="news-card">
            <img src={news.image} className="news-img" alt={news.title} />
            <div className="card-body">
              <span className="tag">{news.tag}</span>
              <h5 className="news-title">{news.title}</h5>
              <p className="date">{news.date}</p>
            </div>
            <div className="card-footer">
              <button className="button">Review</button>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(newsData.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        activeClassName={'active'}
        previousClassName={'Hidden'}
        nextClassName={'Hidden'}
        breakLabel={'Hidden'}
      />
    </div>
  );
}

export default News;
