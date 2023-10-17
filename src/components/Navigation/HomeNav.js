import { useAuth } from 'Hooks/useAuth';
import { Link } from 'react-router-dom';
import css from './Nav.module.css'

export const HomeNav = () => {
  const {isLoggedIn} = useAuth()
  return (
    <div>
      <div className={css.homeNav}

      >
        <Link to="/"><h2 className={css.title}>Home</h2></Link>
        {isLoggedIn && <Link to="/contacts"><h2 className={css.title}>Contacts</h2></Link>}
      </div>
    </div>
  );
};
