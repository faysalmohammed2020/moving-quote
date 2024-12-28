import Sidebar from '@/components/SideBar';
import React, { ReactNode } from 'react';
import clamp from './../../node_modules/lodash-es/clamp';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className='flex'>
      <Sidebar/>
      <main className="">
        {children}
      </main>
      </div>
    </>
  );
};

export default Layout;
