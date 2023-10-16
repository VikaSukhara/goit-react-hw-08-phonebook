import { Link } from 'react-router-dom';

export const AuthNav = () => {

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
      }}
    >
      <Link to="/registration">Registration</Link>
      <Link to="/login">LogIn</Link>
    </nav>
  );
};
