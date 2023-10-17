import { Link } from 'react-router-dom';
import css from './Nav.module.css'

export const AuthNav = () => {

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
      }}
    >
      <Link to="/registration" ><h2 className={css.title}>Registration</h2></Link>
      <Link to="/login"><h2 className={css.title}>LogIn</h2></Link>
    </nav>
  );
};
