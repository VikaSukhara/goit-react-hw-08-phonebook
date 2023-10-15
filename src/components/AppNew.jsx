import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrent } from './redux/auth/authOperation';
import { useAuth } from 'Hooks/useAuth';

const Layout = lazy(() => import('../Pages/Layout'));
const HomeContacts = lazy(() => import('../Pages/HomeContacts'));
const LogIn = lazy(() => import('../Pages/LogIn'));
const Registration = lazy(() => import('../Pages/Registration'));

export const AppNew = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching...'
  ) : (
    <div style={{ paddingLeft: '20px' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeContacts />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </div>
  );
};
