import React, { Component } from "react";

import BookTable from "./BookTable";

function AuthorDetail(props) {
  const author = props.author;
  const bookTable = author.books.map(book => (
    <BookTable key={book.title} book={book} author={author} />
  ));
  return (
    <div className="author col-xs-10">
      <div>
        <h3>{`${author.first_name} ${author.last_name}`}</h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail"
          alt={`${author.first_name} ${author.last_name}`}
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookTable}</tbody>
      </table>
    </div>
  );
}

export default AuthorDetail;
