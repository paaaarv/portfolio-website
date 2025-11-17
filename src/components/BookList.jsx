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
    <ul className="list bg-base-100 rounded-box shadow-md">
  
    <li className="p-4 pb-2 text-xl uppercase tracking-wide">Recently Read</li>
  
      {books.map((userBook, index) => {
        const book = userBook.book;
        return (
          <li key={index} className="list-row">
            <div>
              <img className="size-30 rounded-box" src={book.image.url} alt={book.title} />
            </div>
            <div>
              <div className="text-lg font-bold opacity-100">{book.title}</div>
              <div className="text-sm uppercase font-semibold opacity-60">{book.contributions[0].author.name}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
