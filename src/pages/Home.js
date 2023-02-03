import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('products');
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p><button onClick={navigateHandler}>Navigate</button></p>
    </>
  );
}
