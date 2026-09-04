import React from 'react';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';
import MobileNavbarSearch from '../../MobileSearch';
import {MobileNavbarFooter} from '../PrimaryMenu';

export default function NavbarMobileSidebarSecondaryMenu() {
  const secondaryMenu = useNavbarSecondaryMenu();

  return (
    <div className="mobile-docs-menu">
      <MobileNavbarSearch />
      <div className="mobile-docs-menu__content">{secondaryMenu.content}</div>
      <div className="mobile-docs-menu__links">
        <MobileNavbarFooter />
      </div>
    </div>
  );
}
