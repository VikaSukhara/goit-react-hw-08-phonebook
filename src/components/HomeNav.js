import { useAuth } from 'Hooks/useAuth';
import { Link } from 'react-router-dom';

export const HomeNav = () => {
  const {isLoggedIn} = useAuth()
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
        }}
      >
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </nav>
    </div>
  );
};
