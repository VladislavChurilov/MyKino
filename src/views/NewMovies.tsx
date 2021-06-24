import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewMovies } from '../redux/operations';
import { getNewMovies } from '../redux/selectors';
///
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);
////
export default function NewMovies() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const newMovies = useSelector(getNewMovies);
  useEffect(() => {
    dispatch(fetchNewMovies());
  }, [dispatch]);

  //////

  ////////
  return (
    <section className={classes.newestMovies}>
      <h2 className={classes.newestMoviesHeading}>Newest</h2>

      <Swiper
        slidesPerView={5}
        spaceBetween={45}
        slidesPerGroup={5}
        // loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        className={classes.newestMoviesList}
      >
        {newMovies.map(({ id, poster_path, title, name, vote_average }) => (
          //ADD GENRES!!!!!!!!!!!!!!!!!!!!!!!
          <SwiperSlide key={id}>
            <Link to={`/movies/${id}`}>
              <img
                className={classes.newestMoviesImg}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                width="150"
                height="220"
                alt="Poster is missing"
              />
              <h5 className={classes.newestMoviesTitle}>{title || name}</h5>
              <span className={classes.newestMoviesVote}>{vote_average}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const useStyles = createUseStyles({
  newestMovies: {
    // display: 'flex',
  },

  newestMoviesHeading: {
    paddingLeft: '40px',
    margin: '0',
    marginBottom: '5px',
    color: '#828158',
  },

  newestMoviesList: {
    // padding: '40px',
    // paddingRight: '40px',
    // transition: 'all 1s ease-out',
  },
  newestMoviesItem: {
    width: '150px',
    // display: 'flex',
    position: 'relative',
    // '&>:not(:last-child)': {
    //   marginRight: '10px',
    // },
    color: 'blueviolet',
    '&:hover': {
      // background: '#e0f7d4',
      color: '#f60',
    },
    cursor: 'pointer',
    // border: 'none',
  },
  newestMoviesVote: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: '5px',
    top: '5px',
    width: '30px',
    borderRadius: '2px',
    background: '#3bb33b',
    color: 'whitesmoke',
    fontSize: '14px',
    padding: '1px',
  },
  newestMoviesTitle: {
    margin: '0',
    // width: '150px',
    // width: '100%',
    marginTop: '10px',
    // color: 'blueviolet',
    // '&:hover': {
    //   background: '#e0f7d4',
    // },
  },
  newestMoviesImg: {
    // width: '100%',
    // margin: '0',
  },
});
