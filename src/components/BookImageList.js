import * as React from 'react';
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';

import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function BookImageList() {
    const matches = useMediaQuery('(min-width:600px)');
  return (
    
   

    <ImageList sx={{ width: 1000, height: 450 ,margin:"auto"}} cols={matches ? 3 : 2}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

