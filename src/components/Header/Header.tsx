// import { url } from 'inspector';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import header from '../../images/header2.jpg';
// import sprite from '../../images/sprite.svg';
import AppBar from './AppBar';

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.menuConteiner}>
        <NavLink className={classes.logo} to="/" exact aria-label="My Chat">
          My Chat
        </NavLink>
        <svg className={classes.menu} width="20" height="20">
          <use href="../../images/sprite.svg#icon-menu"></use>
        </svg>
      </div>
      <AppBar />
    </header>
  );
}

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundImage: `url(${header})`,
    // height: '200px',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderBottom: '1px solid #828158',
    width: '100%',
    minWidth: '600px',
    padding: '10px',
  },
  menuConteiner: {
    display: 'flex',
  },
  logo: {
    margin: '0',
    color: '#828158',
    // width: '200px',
    fontSize: '24px',
    fontWeight: '600',
  },
  menu: {
    '& svg': {
      width: '24px',
      paddingRight: '10px',
      '& path': {
        fill: 'black',
      },
    },
    fill: '#828158',
  },
});
