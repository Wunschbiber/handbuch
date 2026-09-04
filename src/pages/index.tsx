import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';

type HelpCardProps = {
  description?: string;
  icon: string;
  title: string;
  to: string;
};

function HelpCard({description, icon, title, to}: HelpCardProps) {
  return (
    <Link className="help-home__card" to={to}>
      <span aria-hidden="true" className="help-home__card-icon">{icon}</span>
      <span className="help-home__card-content">
        <span className="help-home__card-title">{title}</span>
        {description && <span className="help-home__card-description">{description}</span>}
      </span>
      <span aria-hidden="true" className="help-home__arrow">→</span>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout description="Wunschbiber ist die kostenlose Web-App für Wunschlisten: Wünsche sammeln, teilen und Geschenke koordinieren." title="Wunschlisten einfach teilen">
      <main className="help-home">
        <section className="help-home__hero">
          <div className="help-home__hero-content">
            <h1>Hilfe für Wunschbiber</h1>
            <p className="help-home__intro">Wunschbiber ist die kostenlose Web-App für Familien, Organisationen und alle, die Wünsche sammeln, teilen und Geschenke koordinieren möchten.</p>
            <div className="help-home__search">
              <SearchBar />
            </div>
          </div>
          <div aria-hidden="true" className="help-home__illustration">
            <img alt="" className="help-home__mascot" src="/img/magnifying-glass.webp" />
          </div>
        </section>

        <section aria-labelledby="first-steps" className="help-home__topics">
          <div className="help-home__section-heading">
            <h2 id="first-steps">Erste Schritte</h2>
            <p>Alles, was du brauchst, um deine erste Wunschliste in Wunschbiber anzulegen und mit anderen zu teilen.</p>
          </div>
          <div className="help-home__cards help-home__cards--featured">
            <HelpCard description="So erstellst du Wunschlisten für verschiedene Anlässe in Wunschbiber." icon="✦" title="Eine Wunschliste erstellen" to="/wunschliste-erstellen" />
            <HelpCard description="Erfahre, wie du Ideen, Links und Wünsche zu deiner Wunschbiber-Liste hinzufügst." icon="＋" title="Einen Wunsch hinzufügen" to="/wunsch-hinzufuegen" />
            <HelpCard description="Teile deine Wunschliste unkompliziert mit Familie oder anderen Empfänger*innen." icon="↗" title="Eine Wunschliste teilen" to="/wunschliste-teilen" />
          </div>
        </section>

        <section aria-labelledby="reservations" className="help-home__topics">
          <div className="help-home__section-heading">
            <h2 id="reservations">Teilen und reservieren</h2>
            <p>Eine Wunschliste muss einfach zu teilen sein und Empfänger*innen müssen leicht damit zurechtkommen. Erfahre, wie Wunschbiber dies löst.</p>
          </div>
          <div className="help-home__cards">
            <HelpCard description="Lege fest, ob und wie Schenkende Wünsche auf deiner Liste reservieren können." icon="⚙" title="Reservierungen einstellen" to="/reservierungen-einstellen" />
            <HelpCard description="So reservieren Schenkende Wünsche, ohne die Überraschung zu verraten." icon="♡" title="Einen Wunsch reservieren" to="/wunsch-reservieren" />
          </div>
          <div className="help-home__cards help-home__cards--secondary">
            <HelpCard description="Bei Wunschlisten von Wunschbiber sehen Schenkende automatisch Preise aus verschiedenen Shops." icon="€" title="Angebote vergleichen" to="/angebote-preise-vergleichen" />
            <HelpCard description="Gruppiere Wünsche in Kategorien für mehr Übersicht in deinen Wunschlisten." icon="⊞" title="Wünsche gruppieren" to="/wunschlisten-gruppen" />
          </div>
        </section>

        <section className="help-home__product">
          <div>
            <h2>Wunschbiber ausprobieren</h2>
            <p>Probiere selbst aus, wie Wunschbiber dich dabei unterstützt, deine Wünsche zu verwalten und zu teilen.</p>
          </div>
          <a className="help-home__product-link" href="https://www.wunschbiber.de/">Die kostenlose Online-Wunschliste <span aria-hidden="true">→</span></a>
        </section>
      </main>
    </Layout>
  );
}
