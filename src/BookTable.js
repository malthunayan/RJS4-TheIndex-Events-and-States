import React from "react";

function BookTable(props) {
  const book = props.book;
  return (
    <tr>
      <td>{book.title}</td>
      <td>{`${props.author.first_name} ${props.author.last_name}`}</td>
      <td>
        <button className="btn" style={{ backgroundColor: `${book.color}` }} />
      </td>
    </tr>
  );
}
export default BookTable;
