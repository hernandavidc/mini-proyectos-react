import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGifs( category );

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