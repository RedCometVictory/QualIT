import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import { useDispatch } from 'react-redux';
import { Box, Input, Typography } from '@mui/material';
import ButtonUI from './UI/ButtonUI';
import CardUI from './UI/CardUI';
// import { updateBoardImage, getUnsplashApiKey } from 'reduxslices';

const Unsplash = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setHasMounted(true);
  }, []);
  let unsplashApiKey = '1234';
  const unsplashApi = createApi({ accessKey: unsplashApiKey });
  useEffect(() => {
    async function fetchImages() {
      await findImages();
    };
    fetchImages();
  }, []);

  if (!hasMounted) {
    return null;
  }

  const fetchImages = async () => {
    setIsLoading(true);
    const images = await unsplashApi.search.getPhotos({
      query: query,
      page: currentPage,
      perPage: 10,
      orientation: 'landscape'
    });
    
    setImages(images.response.results);
    setIsLoading(false);
  };
  
  const loadMoreImages = async () => {
    setIsLoading(true);
    const getImages = await unsplashApi.search.getPhotos({
      query: query || 'nature',
      page: currentPage + 1,
      perPage: 10,
      orientation: 'landscape'
    });

    setCurrentPage(currentPage + 1);
    const response = getImages.response.results;
    const totalImages = images.concat(response);
    setImages(totalImages);

    setIsLoading(false);
  };

  const imageClickHandler = async (imageUrl) => {
    const data = {
      type: 'backgroundImage',
      value: imageUrl
    };
    // await dispatch(updateBoardImage);
  };

  return (
    <section>
      <Typography id='unsplash-search-title' variant='h6' component='h2'>
        Search Images
      </Typography>
      <Input id='outlined-basic' label='Outlined' variant='outlined' defaultValue='Search Photos' />
      <ButtonUI>
        Search Images
      </ButtonUI>
      <Box>

      </Box>
      <CardUI>
        Searching for info
      </CardUI>
    </section>
  )
};
export default Unsplash;