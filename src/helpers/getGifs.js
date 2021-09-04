export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=YnVQoVgKzqS0H4RopWH4kW3UOF6F0ZjY`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gift = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  console.log(data);
  console.log(gift);

  // aqui paso mi nuevo estado acutalizado de la imagenes API
  return gift;
};

// a la api le pasamos ENCODEURL = pasa la categoria la busqueda sin espacios
// const getGif = async () => {
//   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
//     category
//   )}&limit=10&api_key=YnVQoVgKzqS0H4RopWH4kW3UOF6F0ZjY`;

//   const resp = await fetch(url);
//   const { data } = await resp.json();
//   const gift = data.map((img) => {
//     return {
//       id: img.id,
//       title: img.title,
//       url: img.images.downsized_medium.url,
//     };
//   });
//   console.log(data);
//   console.log(gift);

//   // aqui paso mi nuevo estado acutalizado de la imagenes API
//   setImages(gift);
// };
// getGif();
