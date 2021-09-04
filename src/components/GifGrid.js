import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
//import { getGif } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { data: imagenes, loading } = useFetchGifs(category);

  console.log(imagenes);
  console.log(loading);
  // suma cuando hace click
  //const [count, setCount] = useState(0);

  // // toma las imagenes en el setimagenes
  // const [images, setImages] = useState([]);

  // // ejecuta una sola //vez separamos de la suma del usestate
  // useEffect(() => {
  //   //getGif(category).then((imgs) => setImages(imgs));
  //   getGif(category).then(setImages);
  // }, [category]); // ponemos un array vacio se dispara 1 vez por cada busqueda = categoria para q busque solo cuando buscamos

  return (
    <>
      <h3>{category}</h3>
      {loading ? "cargando " : "data cargada"}
      <div className="card-grid">
        <>
          {imagenes.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </>
        {/* <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}></button> */}

        {/* <ol>
          <hr /> */}
        {/* // aqui destructuramos las images para leer el GIFT */}
        {/* /* {images.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ol>
        <>
          <hr />
          <ol>
            {images.map((img) => (
              <li key={img.id}>
                {img.id}
                {img.title}
              </li>
            ))}
          </ol>
        </> */}
      </div>
    </>
  );
};
