import { Link } from 'react-router-dom';

export const HomeNav = () => {
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
      </nav>
    </div>
  );
};
