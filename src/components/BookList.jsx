import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../api/hardcover';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(data => {
      setBooks(data.user_books || []);
    }).catch(console.error);

  }, []);

  return (
    <div className="bg-[var(--brown)] w-80 rounded-box">
   <div className="carousel rounded-box w-64">
      {books.map((userBook, index) => {
        const book = userBook.book;
        return (
          <div key={index} id={index} className="carousel-item relative w-fullg" >
            <div className="mx-2 my-4 text-[var(--cream)]">
              <img className=" my-2 mx-auto h-[400px] rounded-box" src={book.image.url} alt={book.title} />
              <div className="text-lg font-bold  opacity-100">{book.title}</div>
              <div className="text-sm font-thin">{book.contributions[0].author.name}</div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default BookList;
