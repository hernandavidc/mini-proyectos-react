import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=d5YoY0PK8cJr7yDrgvlyhGP1lpJfs9ur`;
  const { data } = await fetch(url).then((res) => res.json());

  const temp_gifs = data.map( ({ id, title, images }) => ({
     id,
     title,
     url: images.downsized_medium.url
  }));
  return temp_gifs;
}

export const GifGrid = ({ category }) => {

  const [gifs, setGifs] = useState([ ]);

  useEffect(() => {
    getGifs(category).then( gifs => setGifs(gifs) );
  }, [ ])

  return ( <>
    <section className="card-grid">
      <h3> { category } </h3>
      { gifs.map( (item) => (
        <GifItem key={ item.id }
          { ...item }
        />
      )) }
    </section>
  </> )
}