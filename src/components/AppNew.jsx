// import { Route, Routes } from 'react-router-dom';
// import { lazy, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchCurrent } from './redux/auth/authOperation';
// import { useAuth } from 'Hooks/useAuth';
// import Layout from './Layout';


// const Home = lazy(() => import('../Pages/Home'));
// const LogIn = lazy(() => import('../Pages/LogIn'));
// const Registration = lazy(() => import('../Pages/Registration'));

// export const AppNew = () => {
//   const dispatch = useDispatch();

//   const { isRefreshing } = useAuth();
//   useEffect(() => {
//     dispatch(fetchCurrent());
//   }, [dispatch]);

// return  isRefreshing ? (
//   <b>Refreshing user...</b>
// ) : (<div style={{ paddingLeft: '20px' }}>
// <Routes>
//   <Route path="/" element={<Layout />}>
//     <Route index element={<Home />} />
//     <Route path="/registration" element={<Registration />} />
//     <Route path="/login" element={<LogIn />} />
//   </Route>
// </Routes>
// </div>
// )
// };




import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrent } from './redux/auth/authOperation';
import { useAuth } from 'Hooks/useAuth';
import Layout from './Layout';
import { RestrictedRoute } from './RestrictedRouts';
import { PrivateRoute } from './PrivateRouts';


const Home = lazy(() => import('../Pages/Home'));
const Contacts = lazy(() => import('../Pages/Contacts'));
const LogIn = lazy(() => import('../Pages/LogIn'));
const Registration = lazy(() => import('../Pages/Registration'));

export const AppNew = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();


  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div style={{ paddingLeft: '20px' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="/contacts" element={<Contacts />}></Route> */}
                <Route path="/contacts" element={<PrivateRoute component={<Contacts />} redirectTo="/login"/>} />
                
                <Route
                  path="/registration"
                  element={
                    <RestrictedRoute component={<Registration />} redirectTo="/contacts" />
                  }
                />
                <Route
                  path="/login"
                  element={<RestrictedRoute component={<LogIn />} redirectTo="/contacts" />}
                />
        </Route>
      </Routes>
    </div>
  );
}
//   isRefreshing ? (
//     <h1>'Fetching...'</h1>
//   ) :
//    (

//   );
// };



// email 
// "suhara.vika@gmail.com"
// name
// : 
// "Viktoriia"
// password
// : 
// "Vika1972Vika1972"