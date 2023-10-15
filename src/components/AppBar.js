
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { HomeNav } from './HomeNav'; 
import { useAuth } from '../Hooks/useAuth';


export const AppBar = () => {
  const {isLoggedIn} = useAuth()

  return (
    <header>
      <HomeNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
//AuthNav - register/logIn 
//UserMenu - welcome Vika
//Home - this nav doesn't change, but inner page's text shold change


//якщо залогований  -  сховати реэстрацію та логін, показати мобільники
//якщо не залогований - показати лише реэстр та мобіль
