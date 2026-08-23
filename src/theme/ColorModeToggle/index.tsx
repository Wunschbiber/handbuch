import React, {type ReactNode, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';
import IconSystemColorMode from '@theme/Icon/SystemColorMode';
import type {Props} from '@theme/ColorModeToggle';
import type {ColorMode} from '@docusaurus/theme-common';

import styles from './styles.module.css';

type ColorModeChoice = ColorMode | null;

const OPTIONS: ReadonlyArray<{
  readonly value: ColorModeChoice;
  readonly Icon: typeof IconLightMode;
  readonly label: string;
}> = [
  {
    value: 'light',
    Icon: IconLightMode,
    label: translate({
      message: 'Hell',
      id: 'theme.colorToggle.option.light',
      description: 'Label for the light color mode option',
    }),
  },
  {
    value: 'dark',
    Icon: IconDarkMode,
    label: translate({
      message: 'Dunkel',
      id: 'theme.colorToggle.option.dark',
      description: 'Label for the dark color mode option',
    }),
  },
  {
    value: null,
    Icon: IconSystemColorMode,
    label: translate({
      message: 'System',
      id: 'theme.colorToggle.option.system',
      description: 'Label for the system color mode option',
    }),
  },
];

function CurrentColorModeIcon(): ReactNode {
  // 3 icons are always rendered for technical reasons
  // We use "data-theme-choice" to render the correct one
  // This must work even before React hydrates
  return (
    <>
      <IconLightMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.lightToggleIcon)}
      />
      <IconDarkMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.darkToggleIcon)}
      />
      <IconSystemColorMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.systemToggleIcon)}
      />
    </>
  );
}

function ColorModeToggle({
  className,
  buttonClassName,
  value,
  onChange,
}: Props): ReactNode {
  const isBrowser = useIsBrowser();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | FocusEvent) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target as Node)) {
        return;
      }
      setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('focusin', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('focusin', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={clsx('dropdown', 'dropdown--right', 'navbar-color-mode-toggle', styles.toggle, className, {
        'dropdown--show': showDropdown,
      })}>
      <button
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
          buttonClassName,
        )}
        type="button"
        onClick={() => setShowDropdown((open) => !open)}
        disabled={!isBrowser}
        title={translate({
          message: 'Farbschema wählen',
          id: 'theme.colorToggle.title',
          description: 'The title for the color mode toggle button',
        })}
        aria-haspopup="true"
        aria-expanded={showDropdown}
        aria-label={translate({
          message: 'Farbschema wählen',
          id: 'theme.colorToggle.title',
          description: 'The title for the color mode toggle button',
        })}>
        <CurrentColorModeIcon />
      </button>
      <ul className="dropdown__menu">
        {OPTIONS.map(({value: optionValue, Icon, label}) => (
          <li key={String(optionValue)}>
            <a
              href="#"
              className={clsx('dropdown__link', styles.optionLink, {
                'dropdown__link--active': value === optionValue,
              })}
              onClick={(e) => {
                e.preventDefault();
                setShowDropdown(false);
                onChange(optionValue);
              }}>
              <Icon aria-hidden className={styles.optionIcon} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ColorModeToggle);
