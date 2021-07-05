import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetail } from '../../redux/selectors';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { fetchMovieDetail } from '../../redux/operations';
import { IMovie } from '../../interfaces/interfaces';

// const KEY = '300595d929d6a6ebde3ac2741883f41c';

interface ParamTypes {
  movieId: string;
}

export default function MovieDetail() {
  const dispatch = useDispatch();
  const { movieId } = useParams<ParamTypes>();
  const movieDetail = useSelector(getMovieDetail);
  // const movieDetail = useAppSelector(state => state.movies.movieDetail);
  // console.log(movieDetail.title);
  // const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [dispatch, movieId]);
  // useLayoutEffect(() => {
  //   console.log('uLe', movieId);

  //   // dispatch(fetchMovieDetail(movieId));
  // }, [dispatch, movieId]);
  return (
    <div>
      {/* {movieDetail && <p>{movieDetail.title}</p>} */}
      <div>
        <img
          // className={classes.newestMoviesImg}
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          width="220"
          height="320"
          alt="Poster is missing"
        />
      </div>
      <div>
        <h1>
          {movieDetail.title}({movieDetail.title})
        </h1>
        <div>
          <span>{movieDetail.original_language}</span>
          {movieDetail.adult && <span>18+</span>}
        </div>
        <div>
          <h2>About the film</h2>
          <ul>
            <li>
              <span>Production year</span>
              <span>{movieDetail.adult}</span>
              <li>
                <span>Countries</span>
                <span>{movieDetail.production_countries}</span>
              </li>
              <li>
                <span>Genres</span>
                <span>{movieDetail.genres}</span>
              </li>
              <li>
                <span></span>
                <span></span>
              </li>
              <li>
                <span></span>
                <span></span>
              </li>
              <li>
                <span>Budget</span>
                <span>{movieDetail.budget}</span>
              </li>
              <li>
                <span>Release date</span>
                <span>{movieDetail.release_date}</span>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// useMemo(async () => {
//   try {
//     const { data } = await axios.get(
//       `movie/${movieId}?api_key=${KEY}&language=en-US`,
//     );
//     console.log('uuuu', data);
//     // return data;
//     return setMovieDetail(data);
//   } catch (error) {
//     console.log(error);
//   }
// }, [movieId]);
// const data = useRef();

// useEffect(() => {
//   async function nm(movieId) {
//     const { data }: any = await axios.get(
//       `movie/${movieId}?api_key=${KEY}&language=en-US`,
//     );
//     // const a = response.json(response);
//     console.log('gg', data);
//     // return data;
//     setMovieDetail(data);
//   }
// });
// useEffect(() => {
//   (async () => {
//     try {
//       const { data } = await axios.get(
//         `movie/${movieId}?api_key=${KEY}&language=en-US`,
//       );
//       console.log('uuuu', data);
//       // return data;
//       return setMovieDetail(data);
//     } catch (error) {
//       console.log(error);
//     }
//   })();
// }, [movieId]);
// console.log('ggfff', movieDetail);
// console.log(data);
// const data = useRef();
