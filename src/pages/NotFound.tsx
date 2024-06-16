import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC<{setShowNavbar: any, setShowFooter: any}> = ({ setShowNavbar, setShowFooter }) => {
  let navigate = useNavigate();
  useLayoutEffect(() => {
    setShowNavbar(false);
    setShowFooter(false);
  }, [])

  return (
      <div className="flex flex-col items-center justify-center h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <h1 className="text-6xl mb-4 animate-bounce text-blue-500">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
        <div className='flex flex-row gap-5 p-5'>
          <button onClick={() => navigate(-1)} className='text-gray-500 rounded-md border hover:bg-gray-500 hover:text-white border-gray-500 dark:border-blue-500 w-24 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 hover:scale-105 duration-300'>Back</button>
          <button onClick={() => navigate('/')} className='text-gray-500 rounded-md border hover:bg-gray-500 hover:text-white border-gray-500 dark:border-blue-500 w-24 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 hover:scale-105 duration-300'>Home</button>
        </div>
      </div>
    );
}

export default NotFound;