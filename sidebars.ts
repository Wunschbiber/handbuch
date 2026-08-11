import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Erste Schritte',
      collapsed: false,
      items: [
        'create-wishlist',
        'add-wish',
        'share-wishlist',
      ],
    },
    {
      type: 'category',
      label: 'Wunschlisten und Wünsche',
      collapsed: false,
      items: [
        'edit-wish',
        'compare-offers',
        'organize-with-groups',
        'archive-wishlist',
      ],
    },
    {
      type: 'category',
      label: 'Teilen und Reservieren',
      collapsed: false,
      items: [
        'configure-reservations',
        'reserve-wish',
        'remove-reservation',
      ],
    },
    {
      type: 'category',
      label: 'Konto und Geräte',
      collapsed: false,
      items: [
        'use-without-account',
        'offline-use',
      ],
    },
  ],
};

export default sidebars;
