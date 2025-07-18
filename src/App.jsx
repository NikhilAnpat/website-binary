  // App.js
  import './App.css';
  import React, { useState, useEffect, lazy, Suspense } from 'react';
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

  const NavbarDemo = React.memo(lazy(() => import('./components/NavbarDemo')));

  const LoadingProgress = ({ duration = 3 }) => {
    const [seconds, setSeconds] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => { 
      const interval = setInterval(() => {
        setSeconds(prev => {
          const nextSec = prev + 1;
          const newProgress = (nextSec / duration) * 100;

          setProgress(Math.min(newProgress, 100));
          if (nextSec >=  duration) clearInterval(interval);
          return nextSec;
        });
      }, 1100);
      return () => clearInterval(interval);
    }, [duration]);


    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black px-4 text-white">
        <div className="w-full max-w-xs bg-gray-700 rounded-full overflow-hidden h-6 relative">
          <div
            className="bg-white h-full transition-all duration-1000 ease-out text-black text-sm font-semibold flex items-center justify-center"
            style={{ width: `${Math.min(progress, 100)}%` }}>
            {Math.min(Math.round(progress), 100)}%
          </div>
        </div>
        <div className="mt-3 text-sm text-gray-500">
          {seconds}s  
        </div>
      </div>  
    );
  };

  function App() {
    return (
      <Suspense fallback={<LoadingProgress duration={3.1} />}>
        <NavbarDemo/>
      </Suspense>
    );
  }
  export default App;

