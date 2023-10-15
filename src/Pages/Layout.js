import { AppBar } from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  //це незмінна частина хедеру
  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}> */}

      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {/* </Suspense> */}
    </div>
  );
};

export default Layout;
