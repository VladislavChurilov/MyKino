import { useEffect, useState, useCallback } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const KEY = '300595d929d6a6ebde3ac2741883f41c';

interface ParamTypes {
  movieId: string | undefined;
}

export default function MovieDetail() {
  const { movieId } = useParams<ParamTypes>();

  useEffect(() => {
    const response: any = axios.get(
      `movie/${movieId}?api_key=${KEY}&language=en-US`,
    );
    console.log('gg', response);
  }, [movieId]);
  return <div>hii</div>;
}
