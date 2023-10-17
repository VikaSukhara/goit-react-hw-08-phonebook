import { useDispatch } from 'react-redux';
import { useAuth } from '../../Hooks/useAuth';
import { fetchLogOut } from '../redux/auth/authOperation';
import css from './Nav.module.css';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  // console.log('auth', user)
  //треба нейм, але чого лог ин, якщо не реэеструвались

  return (
    <div className={css.userMenuWrap}>
      <p className={css.welcome}>Welcome, {user.email}</p>
      <button
        className={css.logOut}
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
