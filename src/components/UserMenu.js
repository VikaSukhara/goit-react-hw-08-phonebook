import { useDispatch } from 'react-redux';
import { useAuth } from '../Hooks/useAuth';
import { fetchLogOut } from './redux/auth/authOperation';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const  user  = useAuth();
  // console.log('auth', user)
  //треба нейм, але чого лог ин, якщо не реэеструвались

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button
        type="button"
        onClick={() => dispatch(fetchLogOut())}
      >
        Logout
      </button>
    </div>
  );
};
