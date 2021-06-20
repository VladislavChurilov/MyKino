import { useEffect, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchNewMovies } from '../../redux/operations';
import NewMovies from '../../views/NewMovies';

export default function HeadPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchNewMovies());
  //     console.log('hinm');
  //   }, [dispatch]);
  return (
    <main className={classes.headPage}>
      <NewMovies />
    </main>
  );
}

const useStyles = createUseStyles({
  headPage: {
    margin: 'auto',
    width: '1000px',
    maxWidth: '100%',
    padding: '10px',
    background: 'whitesmoke',
    // display: 'flex',
  },
});
