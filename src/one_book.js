import React from "react";

const Book = (props) => {
  const handleClick = () => {
    alert("You clicked something");
  };

  return (
    <article className="book">
      <img src={props.book.img} alt=""></img>
      <h1 onClick={handleClick}>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
    </article>
  );
};

export default Book;
