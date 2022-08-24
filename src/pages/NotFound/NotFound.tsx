import { Link } from 'react-router-dom';

export const NotFound = () => {
  document.title = '404 - JS Dev - Ivan Mankovich';
  return (
    <div className="mt-[48px] xl:mt-0 relative">
      <p className="text-3xl md:text-6xl mt-2 md:mt-4 print:hidden">Page not found.</p>
      <Link to="/" className="block py-2" title="Back to homepage">
        <p className="block px-2 font-bold">Back to homepage</p>
      </Link>
    </div>
  );
};
