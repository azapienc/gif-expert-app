import React, { useEffect, useState } from 'react'
import { getGifList } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category) => {
    const newImages = await getGifList(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  }
}
