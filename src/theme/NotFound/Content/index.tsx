import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('not-found', className)}>
      <div className="container not-found__content">
        <img
          src="/img/magnifying-glass.webp"
          width="140"
          height="140"
          alt="Wunschbiber-Maskottchen sucht mit einer Lupe"
          className="not-found__mascot"
        />
        <p className="not-found__eyebrow">Wir haben überall gesucht...</p>
        <Heading as="h1" className="not-found__title">
          Diese Seite haben wir leider nicht gefunden
        </Heading>
        <p className="not-found__description">
          Auf der Hilfe-Startseite findest du alle Anleitungen auf einen Blick.
        </p>
        <div className="not-found__actions">
          <a className="button button--primary" href="/">
            Zur Hilfe-Startseite
          </a>
          <a className="button button--link" href="https://www.wunschbiber.de/app/">
            Wunschbiber öffnen
          </a>
        </div>
      </div>
    </main>
  );
}
