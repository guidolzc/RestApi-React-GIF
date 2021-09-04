import React, { useState } from "react";

// llamo a los props desde aqui cuando pido algo de el principal
import PropTypes from "prop-types";

// destructurar bien siempre loS PROPS
export const AddCategory = ({ setCategories }) => {
  const [InputValue, setInputValue] = useState("");

  // para que se pueda escribir y actualizar lo q escribimos
  const handleValue = (e) => {
    setInputValue(e.target.value);
    //console.log(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    //console.log("sumit hecho");

    //si ahi mas de 2 letras agregar sino no y no toma encuenta los espacios
    if (InputValue.trim().length > 2) {
      // aqui ponemos el value para q agrege lo q nosotros escribimos

      setCategories((cats) => [InputValue, ...cats]); //oone en primera posicion la images de
      // al agregar dejamelo vacio
      setInputValue("");
    }
  };

  return (
    //  form para q no haga refresh cada ves q apretamos agregamos onSumit

    <form onSubmit={handleSumit}>
      <h1> Busqueda GIFS 2021 : {InputValue} </h1>
      {/* // para escribir en un input usar onchange te avilita  */}
      <input type="text" value={InputValue} onChange={handleValue} />
    </form>
  );
};

// OBLIGATORIAMENTE VA EL PROTOTYPE
AddCategory.protoType = {
  setCategories: PropTypes.func.isRequired,
};
