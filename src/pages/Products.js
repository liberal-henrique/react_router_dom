import React from "react";
import { Link } from "react-router-dom";

const productsList = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

export default function Products() {
  return (
    <>
      <h2>Products</h2>
      <ul>
        {productsList.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.id}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
