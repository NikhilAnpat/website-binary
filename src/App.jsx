import './App.css'
import React, { useState, lazy, Suspense } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const  NavbarDemo = lazy(() => import('./components/NavbarDemo'));

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center h-screen text-white">
    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
    <p className="text-lg">Loading...</p>
  </div>
);

function App() {
  return (
    <>
      <Suspense  fallback={<LoadingSpinner />}>
      <NavbarDemo />
    </Suspense>
    </>
  )
} 

export default App
