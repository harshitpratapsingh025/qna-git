import { cn } from './../../../utils';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export const NavLinks = ({ isMobile = false, onLinkClick }: NavLinkProps) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Users', href: '/users' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const baseClasses = "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300";
  
  const desktopClasses = "px-3 py-2 text-sm font-medium";
  const mobileClasses = "block px-4 py-3 text-base font-medium";

  return (
    <div className={cn(
      "flex",
      isMobile ? "flex-col" : "space-x-4"
    )}>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={cn(
            baseClasses,
            isMobile ? mobileClasses : desktopClasses
          )}
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};