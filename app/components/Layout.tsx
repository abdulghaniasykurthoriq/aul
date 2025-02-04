'use client'
import React, { ReactNode, useEffect } from 'react';
import Navbar from './navbar';
import Particle from './Particle';
import AOS from 'aos';


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init();

  }, [])
  
  return (
    <div
      className={`flex flex-col relative mx-auto transition-colors duration-700 bg-white dark:bg-blueGray min-h-screen z-40`}
    >
      <Particle/>
      
      <Navbar />
      <div className="container mx-auto z-10">
        <main>{children}</main>
      </div>
    </div>
  );
}