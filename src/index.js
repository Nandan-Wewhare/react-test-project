import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {books} from './all_books'
import Book from './one_book'

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id}  book={book}></Book>; 
        // instead of passing object we can also pass {...book} which passes all the properties to the function
        // overall it will become <Book {...book}/>
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
