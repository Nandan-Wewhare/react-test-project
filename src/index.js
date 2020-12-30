import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/61MrRA4qE0L._AC_UL200_SR200,200_.jpg",
    title: "INDIAN POLITY",
    author: "M LAXMIKANTH",
  },
  {
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/61r-WomIz0L._AC_UL200_SR200,200_.jpg",
    title: "One Arranged Murder",
    author: "Chetan Bhagat",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.book.img} alt=""></img>
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
