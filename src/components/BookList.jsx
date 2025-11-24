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
    <ul className="list rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Recently Read: </li>
      {books.map((userBook, index) => {
        const book = userBook.book;
        console.log(book);
        return (
          <li key={index} id={index} className="list-row">
            <div><img className="size-10 rounded-box" src={book.image.url}/></div>
            <div>
              <div>{book.title}</div>
              <div className="text-xs uppercase font-semibold opacity-60">{book.contributions[0].author.name}</div>
            </div>
          </li>
          )}
        )}
    </ul>
  )
};

export default BookList;
