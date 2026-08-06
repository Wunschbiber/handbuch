import React, {useRef} from 'react';
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
  const searchItemRef = useRef<HTMLDivElement>(null);

  if (mobile) {
    return null;
  }

  const openSearch = () => {
    const searchItem = searchItemRef.current;
    const detachedSearchButton = searchItem?.querySelector<HTMLButtonElement>(
      '.aa-DetachedSearchButton',
    );

    if (detachedSearchButton) {
      detachedSearchButton.click();
      return;
    }

    const searchInput = searchItem?.querySelector<HTMLInputElement>('input');
    searchInput?.focus();
    searchInput?.click();
  };

  return (
    <div className="navbar-search-item" ref={searchItemRef}>
      <NavbarSearch className={className}>
        <SearchBar />
      </NavbarSearch>
      <button
        aria-label="Suche öffnen"
        className="navbar-mobile-search-button"
        onClick={openSearch}
        title="Suche öffnen"
        type="button">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m21 19-5.2-5.2a7 7 0 1 0-2 2L19 21zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5Z" />
        </svg>
      </button>
    </div>
  );
}
