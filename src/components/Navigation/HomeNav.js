import { useAuth } from 'Hooks/useAuth';
import { Link } from 'react-router-dom';
import css from './Nav.module.css'

export const HomeNav = () => {
  const {isLoggedIn} = useAuth()
  return (
    <div>
      <div className={css.homeNav}

      >
        <Link to="/" className={css.title}>Home</Link>
        {isLoggedIn && <Link to="/contacts" className={css.title}>Contacts</Link>}
      </div>
    </div>
  );
};
