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
      <Link to="/registration" className={css.title}>Registration</Link>
      <Link to="/login" className={css.title}>LogIn</Link>
    </nav>
  );
};
