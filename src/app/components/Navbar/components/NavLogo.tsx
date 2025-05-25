import { Link } from 'react-router-dom';

export const NavLogo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link to="/" className="flex items-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          QNA
        </span>
      </Link>
    </div>
  );
};
