import React, {type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import MobileNavbarSearch from '../../MobileSearch';

function useNavbarItems() {
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

export function NavbarMobileItems({
  filter = () => true,
}: {
  filter?: (item: NavbarItemConfig) => boolean;
}): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems().filter(filter);

  return (
    <ul className="menu__list">
      {items.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))}
    </ul>
  );
}

export function MobileNavbarFooter(): ReactNode {
  return (
    <div className="mobile-navbar-footer">
      <NavbarMobileItems filter={(item) => item.className === 'navbar-github-link'} />
      <NavbarColorModeToggle className="mobile-navbar-footer__color-mode" />
    </div>
  );
}

export default function NavbarMobilePrimaryMenu() {
  return (
    <div className="mobile-navbar-menu">
      <MobileNavbarSearch />
      <NavbarMobileItems filter={(item) => item.type !== 'search' && item.className !== 'navbar-app-link' && item.className !== 'navbar-github-link'} />
      <MobileNavbarFooter />
    </div>
  );
}
