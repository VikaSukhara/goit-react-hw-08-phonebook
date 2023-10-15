import { useDispatch } from 'react-redux';
import { useAuth } from '../Hooks/useAuth';
import { fetchLogOut } from './redux/auth/authOperation';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(fetchLogOut())}
      >
        Logout
      </button>
    </div>
  );
};
