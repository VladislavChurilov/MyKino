import { NavLink } from 'react-router-dom';
// import styles from '../Phonebook.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      //   className={styles.AuthNav}
      //   activeClassName={styles.activeLink}
    >
      Registration
    </NavLink>
    <NavLink
      to="/login"
      exact
      //   className={styles.AuthNav}
      //   activeClassName={styles.activeLink}
    >
      Log In
    </NavLink>
  </div>
);

export default AuthNav;
