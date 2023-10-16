import { useDispatch } from 'react-redux';
import { useAuth } from '../Hooks/useAuth';
import { fetchLogOut } from './redux/auth/authOperation';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const  {user}  = useAuth();
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



//vika
//vika13@gmail.com
//Vika1972!Vika1972!


//Viktoriia
//viktoriia13@gmail.com
//Viktoriia1972!Viktoriia1972!