import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { HomeNav } from './HomeNav';
import { useAuth } from '../../Hooks/useAuth';
import css from './Nav.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <nav className={css.appBarNav}>
        <HomeNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
//AuthNav - register/logIn
//UserMenu - welcome Vika + Log Out
//Home - this nav doesn't change, but inner page's text shold change

//якщо залогований  -  сховати реэстрацію та логін, показати мобільники
//якщо не залогований - показати лише реэстр та мобіль
