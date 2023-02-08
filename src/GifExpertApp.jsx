import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['coffee']);

  const onAddCategory = (event) => {
    if (categories.includes(event))
      return;
    setCategories(categories => [event, ...categories]);
  }

  return (
    <>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {
        categories.map((category, i) => <GifGrid key={category} category={category} />)
      }
    </>
  )
}
