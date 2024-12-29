import Sidebar from '@/components/SideBar';
import React, { ReactNode } from 'react';


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
