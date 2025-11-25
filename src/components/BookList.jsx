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
    <div>
    <div className="p-4 pb-2 text-md font-semibold tracking-wide">Recently Read: </div>
    <div className="flex gap-4 overflow-x-auto">
        {books.map((userBook, index) => {
          const book = userBook.book;
          return (
            <div key={index} id={index} className="card !p-1 w-48 shadow-sm">
              <figure className="px-2 pt-2">
                <img
                  src={book.image.url}
                  alt={book.title}
                  className="rounded-md max-h-[175px]" />
              </figure>
              <div className="card-body !p-2 text-center gap-0">
                <h5 className="card-title self-center text-sm">{book.title}</h5>
                <p className="text-xs uppercase">{book.contributions[0].author.name}</p>
              </div>
            </div>
            )}
          )}
    </div>
    </div>
  )
};

export default BookList;
