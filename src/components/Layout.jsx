import React from 'react';
import { Outlet } from 'react-router-dom'; // <-- important
import NavMenu from './NavMenu.jsx';
import { ThemeProvider } from 'next-themes';
import { Link } from 'react-router-dom';
export default function Layout() {
  return (
    <>
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
      <header  className='w-[80%] mx-auto sticky top-0 z-50 bg-background/10 backdrop-blur-sm md:h-[100px] border-b border-white/20 flex items-center '>
        <NavMenu />
      </header>

      <main style={{ minHeight: '100vh', padding: '1rem 2rem' }} className='md:w-[70%]'>
        <Outlet /> {/* <-- renders the routed page */}
      </main>

      <footer className=' h-[100px] border-t flex justify-center items-center gap-4 bg-background text-muted-foreground'>
        <small>© {new Date().getFullYear()} Zenfratech School. All rights reserved.</small>
        <Link  to="/"> Terms of use</Link>
         <Link  to="/"> Privacy Policy</Link>
      </footer>
      </ThemeProvider>
    </>
  );
}
