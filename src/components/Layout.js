import { AppBar } from 'components/Navigation/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  //це незмінна частина хедеру
  return (
    <div>
      <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
    </div>
  );
};

export default Layout;
