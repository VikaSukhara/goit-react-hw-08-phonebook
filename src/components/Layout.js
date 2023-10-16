import { AppBar } from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  //це незмінна частина хедеру
  return (
    <div>
      <AppBar />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
