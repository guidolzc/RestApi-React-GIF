import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [Categories, setCategories] = useState(["cafe"]);
  // const handleAdd = () => {
  //   // copio el array y agrego uno nuevo aqui iria el value
  //   setCategories((cats) => [...Categories, "HunterX"]);
  // };

  return (
    <>
      <h2> GifExpertApp </h2>
      {/* // mandamos setcategories por medio de los PROPS */}
      <AddCategory setCategories={setCategories} />
      <hr />
      {/*  <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {/* // entramos al map y entramos dentro d la array con key , categoria */}
        {Categories.map((category) => (
          //return <li key={category}>{category}</li>;

          // mandamos category por medio de los PROPS
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
