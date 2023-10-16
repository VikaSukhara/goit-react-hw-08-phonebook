import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrent } from './redux/auth/authOperation';
import { useAuth } from 'Hooks/useAuth';
import Layout from './Layout';


const HomeContacts = lazy(() => import('../Pages/HomeContacts'));
const LogIn = lazy(() => import('../Pages/LogIn'));
const Registration = lazy(() => import('../Pages/Registration'));

export const AppNew = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

return  isRefreshing ? (
  <b>Refreshing user...</b>
) : (<div style={{ paddingLeft: '20px' }}>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomeContacts />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<LogIn />} />
  </Route>
</Routes>
</div>
)

// isRefreshing ? (
//   <h1>'Fetching...'</h1>
// ) :
//  (

// );
};
