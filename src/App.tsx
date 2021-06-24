import { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import Header from './components/Header';

import routes from './routes/routes';

const Register = lazy(
  () => import('./components/Registration' /* webpackChunkName: "Register" */),
);
const Login = lazy(
  () => import('./components/Login' /* webpackChunkName: "Login" */),
);
const HeadPage = lazy(
  () => import('./components/HeadPage' /* webpackChunkName: "HeadPage" */),
);
const MovieDetail = lazy(
  () =>
    import('./components/MovieDetail' /* webpackChunkName: "movieDetail" */),
);

const NotFound = lazy(
  () => import('./components/NotFound' /* webpackChunkName: "NotFound" */),
);

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.getCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path={routes.headPage}>
            <HeadPage />
          </Route>
          <Route exact path={routes.movieDetail}>
            <MovieDetail />
          </Route>
          <Route exact path={routes.register}>
            <Register />
          </Route>
          <Route exact path={routes.login}>
            <Login />
          </Route>
          <Route exact path={routes.home}>
            {/* <HeadPage /> */}
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
