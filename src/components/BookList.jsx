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
      <ul className="list rounded-box shadow-md">
        <li className="p-4 pb-2 text-md font-semibold tracking-wide">Recently Read: </li>
        {books.map((userBook, index) => {
          const book = userBook.book;
          console.log(book);
          return (
            <li key={index} id={index} className="list-row">
              <div><img className="w-[50px] rounded-box" src={book.image.url}/></div>
              <div>
                <div className="font-semibold uppercase text-md">{book.title}</div>
                <div className="text-xs">{book.contributions[0].author.name}</div>
              </div>
            </li>
            )}
          )}
      </ul>
    </div>
  )
};

export default BookList;
