// App.js
import './App.css';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NavbarDemo = React.memo(lazy(() => import('./components/NavbarDemo')));

const LoadingProgress = ({ duration = 4 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalSteps = 100;
    const intervalTime = (duration * 1000) / totalSteps; // e.g. 4000ms / 100 = 40ms

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setProgress(step);
      if (step >= 100) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black px-4 text-white">
      <div className="w-full max-w-xs bg-gray-700 rounded-full overflow-hidden h-6 relative">
        <div
          className="bg-white h-full transition-all duration-50 ease-out text-black text-sm font-semibold flex items-center justify-center"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-500">
        {((progress / 100) * duration).toFixed(1)}s
      </div>
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<LoadingProgress duration={4} />}>
      <NavbarDemo />
    </Suspense>
  );
}

export default App;
