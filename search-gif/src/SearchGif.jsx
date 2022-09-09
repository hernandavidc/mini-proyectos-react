import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const SearchGif = () => {

  const [categories, setCategories] = useState(['One punch']);

  const addCategory = (val) => {
    if (categories.includes(val)) return;

    setCategories([val, ...categories]);
  }

  return (
    <>
      {/* titulo */}
      <h1>SearchGif</h1>

      {/* input */}
      <AddCategory onAddCategory={addCategory} />

      {/* Listado de gif */}
      { categories.map((el) => <GifGrid key={ el } category={ el } />) }

      {/* Gif item */}
    </>
  )
}
