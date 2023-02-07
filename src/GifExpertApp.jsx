import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['coffee']);

  const onAddCategory = (event) => {
    if (categories.includes(event))
      return;
    setCategories(categories => [event, ...categories]);
  }

  return (
    <>
      <div>GifExpertApp</div>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {
        categories.map((category, i) => <GifGrid key={category} category={category} />)
      }
    </>
  )
}
