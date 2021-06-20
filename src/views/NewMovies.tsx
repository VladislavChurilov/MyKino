import { useEffect, useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewMovies } from '../redux/operations';
import { getNewMovies } from '../redux/selectors';

export default function NewMovies() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const newMovies = useSelector(getNewMovies);
  useEffect(() => {
    dispatch(fetchNewMovies());
    console.log('hinm');
  }, [dispatch]);

  //////

  ////////
  return (
    <section className={classes.newestMovies}>
      <h2 className={classes.newestMoviesHeading}>Newest</h2>
      <ul className={classes.newestMoviesList}>
        {newMovies.map(({ id, poster_path, title, vote_average }) => (
          <li className={classes.newestMoviesItem} key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              width="150"
              height="220"
              alt="Poster is missing"
            />
            <h5 className={classes.newestMoviesTitle}>{title}</h5>
            <span className={classes.newestMoviesVote}>{vote_average}</span>
          </li>
        ))}
      </ul>
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
  },
  newestMoviesList: {
    display: 'flex',
    paddingRight: '40px',
    // overflow: 'scroll',
    overflowY: 'auto',
    overflowX: 'hidden',
    // transform: 'rotate(-90deg)',
    transformOrigin: 'right',
    // clipPath: 'border-box',
    // clip: 'rect(119px, 255px, 229px, 80px)',
    // marginLeft: '10px',
  },
  newestMoviesItem: {
    position: 'relative',
    '&>:not(:last-child)': {
      marginRight: '10px',
    },
    '&:hover': {
      background: '#e0f7d4',
    },
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
    marginTop: '10px',
    color: 'blueviolet',
  },
});
