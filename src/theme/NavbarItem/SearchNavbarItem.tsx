import React from 'react';
import {useLocation} from '@docusaurus/router';
import SearchBar from '@theme/SearchBar';
import NavbarSearch from '@theme/Navbar/Search';

type SearchNavbarItemProps = {
  className?: string;
  mobile?: boolean;
};

export default function SearchNavbarItem({
  mobile,
  className,
}: SearchNavbarItemProps) {
  const {pathname} = useLocation();

  if (mobile || pathname === '/') {
    return null;
  }

  return (
    <div className="navbar-search-item">
      <NavbarSearch className={className}>
        <SearchBar />
      </NavbarSearch>
    </div>
  );
}
