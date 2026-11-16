import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

type App = {
  id: string;
  name: string;
  icon: string;
  iconClass?: string;
  text: string;
  install?: string;
  links: {label: string; href: string}[];
};

const APPS: App[] = [
  {
    id: 'kashcal',
    name: 'KashCal',
    icon: '/images/kashcal-icon-144.webp',
    text: 'A calendar for iCloud, CalDAV and the calendars already on your phone. Works offline.',
    links: [
      {label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=org.onekash.kashcal'},
      {label: 'F-Droid', href: 'https://f-droid.org/packages/org.onekash.kashcal/'},
      {label: 'Website', href: 'https://kashcal.onekash.org'},
      {label: 'Source code', href: 'https://github.com/KashCal/KashCal'},
    ],
  },
  {
    id: 'kashpass',
    name: 'KashPass',
    icon: '/images/kashpass-icon-144.webp',
    text: 'Open and edit your KeePass vault on your phone. No internet permission.',
    links: [
      {label: 'Join the beta', href: 'https://kashpass.onekash.org/beta/'},
      {label: 'Download', href: 'https://github.com/OneKashLabs/KashPass/releases'},
      {label: 'Website', href: 'https://kashpass.onekash.org'},
      {label: 'Source code', href: 'https://github.com/OneKashLabs/KashPass'},
    ],
  },
  {
    id: 'kashcake',
    name: 'KashCake',
    icon: '/images/kashcake-icon-144.webp',
    text: 'Birthday reminders from your contacts, worked out on your phone.',
    links: [
      {label: 'Download', href: 'https://github.com/OneKashLabs/KashCake/releases/latest'},
      {label: 'Source code', href: 'https://github.com/OneKashLabs/KashCake'},
    ],
  },
];

const TOOLS: App[] = [
  {
    id: 'icloud-calendar-mcp',
    name: 'iCloud Calendar MCP',
    icon: '/images/icloud-calendar-mcp-icon-144.webp',
    iconClass: 'ok-app__icon--light',
    text: 'An MCP server that gives AI agents read and write access to iCloud Calendar. On the MCP Registry, npm and PyPI.',
    install: 'npx @icloud-calendar-mcp/server',
    links: [
      {label: 'Source code', href: 'https://github.com/icloud-calendar-mcp/icloud-calendar-mcp'},
      {label: 'npm', href: 'https://www.npmjs.com/package/@icloud-calendar-mcp/server'},
      {label: 'PyPI', href: 'https://pypi.org/project/icloud-calendar-mcp/'},
    ],
  },
];

const RULES = [
  {title: 'Your data stays with you', body: 'On your phone and in the accounts you choose. We don’t collect it.'},
  {title: 'No ads', body: 'Not in the apps, and not as a business model.'},
  {title: 'Open source', body: 'The code for every app is on GitHub.'},
  {title: 'One job per app', body: 'Each app does one thing.'},
];

function Hero(): ReactNode {
  return (
    <header className="ok-hero">
      <div className="container ok-hero__inner">
        <div>
          <Heading as="h1" className="ok-hero__title">
            Apps and tools that keep your data with you.
          </Heading>
          <p className="ok-hero__lead">Android apps and developer tools. Free and open source, with no ads or tracking.</p>
          <div className="ok-hero__cta">
            <Link className="ok-btn ok-btn--teal" to="/#apps">
              See the apps
            </Link>
            <Link className="ok-btn ok-btn--line" href="https://github.com/OneKashLabs">
              GitHub
            </Link>
          </div>
        </div>
        <div className="ok-hero__art">
          <img className="ok-hero__kash" src={useBaseUrl('/images/kash-wave.webp')} fetchPriority="high" alt="Kash, the OneKash Labs mascot, waving" width={320} height={306} />
          <ul className="ok-shelf">
            {APPS.map((a) => (
              <li key={a.id}>
                <Link to={`/#${a.id}`}>
                  <img src={useBaseUrl(a.icon)} alt="" width={72} height={72} />
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

function Rows({items}: {items: App[]}): ReactNode {
  return (
    <ul className="ok-apps">
      {items.map((a) => (
        <li className="ok-app" key={a.id}>
          <img className={`ok-app__icon ${a.iconClass ?? ''}`} src={useBaseUrl(a.icon)} alt="" width={72} height={72} loading="lazy" />
          <div>
            <Heading as="h3" id={a.id}>{a.name}</Heading>
            <p>{a.text}</p>
            {a.install && <code className="ok-install">{a.install}</code>}
            <div className="ok-links">
              {a.links.map((l) => (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="KashCal, KashPass and KashCake"
      description="KashCal, KashPass, KashCake and iCloud Calendar MCP. Android apps and developer tools, free and open source, with no ads or tracking.">
      <Hero />
      <main>
        <section className="ok-section">
          <div className="container">
            <Heading as="h2" className="ok-heading" id="apps">
              Apps
            </Heading>
            <Rows items={APPS} />
          </div>
        </section>
        <section className="ok-section">
          <div className="container">
            <Heading as="h2" className="ok-heading" id="developers">
              For developers
            </Heading>
            <Rows items={TOOLS} />
          </div>
        </section>
        <section className="ok-section">
          <div className="container">
            <Heading as="h2" className="ok-heading">
              How we build
            </Heading>
            <div className="ok-rules">
              {RULES.map((r) => (
                <div key={r.title}>
                  <Heading as="h3">{r.title}</Heading>
                  <p>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
