import { selectIsLoggedIn, selectIsRefreshing, selectUser } from 'components/redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
