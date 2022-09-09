import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const SearchGif = () => {

  const [categories, setCategories] = useState(['One punch']);

  const addCategory = (val) => {
    if (categories.includes(val)) return;

    setCategories([...categories, val]);
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
