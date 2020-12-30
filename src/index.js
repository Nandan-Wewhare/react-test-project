import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1, // to remove => Warning: Each child in a list should have a unique "key" prop.
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/61MrRA4qE0L._AC_UL200_SR200,200_.jpg",
    title: "INDIAN POLITY",
    author: "M LAXMIKANTH",
  },
  {
    id: 2,
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
        return <Book key={book.id}  book={book}></Book>; 
        // instead of passing object we can also pass {...book} which passes all the properties to the function
        // overall it will become <Book {...book}/>
      })}
    </section>
  );
}

const Book = (props) => {
  const handleClick = () =>{
    alert('You clicked something')
  }

  return (
    <article className="book">
      <img src={props.book.img} alt=""></img>
      <h1 onClick={handleClick}>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
