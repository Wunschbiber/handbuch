import React from 'react';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';
import NavbarMobilePrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';

export default function NavbarMobileSidebarSecondaryMenu() {
  const secondaryMenu = useNavbarSecondaryMenu();

  return (
    <div className="mobile-docs-menu">
      <div className="mobile-docs-menu__content">{secondaryMenu.content}</div>
      <div className="mobile-docs-menu__links">
        <NavbarMobilePrimaryMenu />
      </div>
    </div>
  );
}
