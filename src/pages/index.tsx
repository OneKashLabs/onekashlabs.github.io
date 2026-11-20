import {useEffect, useState, type CSSProperties, type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import Layout from '@theme/Layout';
import AskAbout from '@site/src/components/AskAbout';
import '../css/home.css';

const KASHCAL = 'https://kashcal.onekash.org';
const KASHPASS = 'https://kashpass.onekash.org';
const KASHCAKE = 'https://kashcake.onekash.org';
const MCP = 'https://github.com/icloud-calendar-mcp/icloud-calendar-mcp';

/**
 * Returns the mailto link for an optional subject, built only after load so the address never
 * appears in the page's HTML for scrapers to read.
 */
function useMail(): (subject?: string) => string {
  const [address, setAddress] = useState<string | null>(null);
  useEffect(() => setAddress(['kash', 'onekash.org'].join('@')), []);
  return (subject) =>
    address ? `mailto:${address}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}` : '#';
}

function Phone(): ReactNode {
  const img = (name: string) => useBaseUrl(`/home/${name}`);
  return (
    <div className="stage">
      <div className="phone" role="group" aria-label="Apps by OneKash Labs, and a space for yours">
        <div className="bezel">
          <div className="island" aria-hidden="true" />
          <div className="wall">
            <div className="status" aria-hidden="true">
              <span>9:41</span>
              <span>
                <svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5" width="3" height="7" rx="1" /><rect x="10" y="2" width="3" height="10" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" opacity=".4" /></svg>
                <svg viewBox="0 0 16 12"><path d="M8 11.5 1 4a10 10 0 0 1 14 0z" /></svg>
                <svg viewBox="0 0 26 12"><rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity=".5" /><rect x="2" y="2" width="16" height="8" rx="2" /><rect x="23.5" y="4" width="2" height="4" rx="1" opacity=".5" /></svg>
              </span>
            </div>
            <div className="grid">
              <a className="slot" href={KASHCAL}><img src={img('kashcal.webp')} alt="" width={72} height={72} /><span>KashCal</span></a>
              <a className="slot" href={KASHPASS}><img src={img('kashpass.webp')} alt="" width={72} height={72} /><span>KashPass</span></a>
              <a className="slot" href={KASHCAKE}><img src={img('kashcake.webp')} alt="" width={72} height={72} /><span>KashCake</span></a>
              <a className="slot" href={MCP}><img src={img('mcp.webp')} alt="" width={72} height={72} /><span>iCloud Calendar MCP</span></a>
              <a className="slot mine" href="#talk"><div className="yours" aria-hidden="true">+</div><span>Yours?</span></a>
              <div className="slot ghost" aria-hidden="true" />
            </div>
            <img className="wallkash" src={img('kash-wave.webp')} alt="" />
            <div className="dots" aria-hidden="true"><i /><i /></div>
            <div className="dock" aria-hidden="true">
              <span><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg></span>
              <span><svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z" /></svg></span>
              <span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg></span>
              <span><svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="3" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l2-3h4l2 3" /></svg></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tile = (bar: string, ink: string) => ({'--tile': bar, '--tile-ink': ink}) as CSSProperties;

export default function Home(): ReactNode {
  const mail = useMail();
  // Plain ids aren't seen by the build's anchor check; the navbar and 404 footer link to these.
  const links = useBrokenLinks();
  links.collectAnchor('apps');
  links.collectAnchor('talk');
  const img = (name: string) => useBaseUrl(`/home/${name}`);
  return (
    <Layout
      title="Private, open-source apps"
      description="OneKash Labs makes KashCal, KashPass and KashCake: private, open-source Android apps. We also help you learn to build, customize and run yours."
      noFooter
      wrapperClassName="okh">
      <Head>
        <html className="okh-page" />
        {/* Brand first on the home page; Layout would append it after the title. */}
        <title>OneKash Labs: private, open-source apps</title>
        <meta property="og:title" content="OneKash Labs: private, open-source apps" />
      </Head>
      <div className="wrap">
        <header className="top">
          <a className="name" href="/"><img src={img('logo.svg')} alt="" width={36} height={36} />OneKash Labs</a>
          <a className="mail" href={mail()}>Contact us</a>
        </header>
        <section className="hero">
          <div>
            <h1>What should we build together?</h1>
            <p>We make private, open-source apps, and help you learn, customize and run yours.</p>
            <a className="btn" href="#talk">Start a project</a>
          </div>
          <Phone />
        </section>
      </div>

      <div className="wrap">
        <section className="offers" aria-labelledby="offers-h">
          <h2 id="offers-h">Bring your ideas.</h2>
          <div className="tiles">
            <a className="tile" style={tile('#4A90D9', '#1F5FA8')} href={mail('Bootcamp waitlist')}>
              <h3>Learn to build your own app</h3>
              <p>A bootcamp, from first screen to app store. Join the waitlist.</p>
            </a>
            <a className="tile" style={tile('#EF5F78', '#C2354F')} href="#talk">
              <h3>An open-source app, with your name on it</h3>
              <p>Your colours and features, where the license allows.</p>
            </a>
            <a className="tile" style={tile('#1E9E8A', '#0E7364')} href="#talk">
              <h3>Our apps for your team</h3>
              <p>You bring the team. We bring the apps and the know-how.</p>
            </a>
          </div>
        </section>
      </div>

      <section className="built" id="apps">
        <div className="wrap">
          <h2>Apps we make and maintain.</h2>
          <p className="lead">Open source, no ads, nothing collected. Out in the world today.</p>
          <div className="fan">
            <figure className="cal">
              <figcaption><a href={KASHCAL}><img src={img('kashcal.webp')} alt="" width={32} height={32} loading="lazy" decoding="async" />KashCal</a></figcaption>
              <div className="device"><img src={img('screen-kashcal.webp')} width={720} height={1600} loading="lazy" decoding="async" alt="KashCal's week view" /></div>
            </figure>
            <figure className="pass">
              <figcaption><a href={KASHPASS}><img src={img('kashpass.webp')} alt="" width={32} height={32} loading="lazy" decoding="async" />KashPass</a></figcaption>
              <div className="device"><img src={img('screen-kashpass.webp')} width={720} height={1600} loading="lazy" decoding="async" alt="KashPass's entry list" /></div>
            </figure>
            <figure className="cake">
              <figcaption><a href={KASHCAKE}><img src={img('kashcake.webp')} alt="" width={32} height={32} loading="lazy" decoding="async" />KashCake</a></figcaption>
              <div className="device"><img src={img('screen-kashcake.webp')} width={720} height={1600} loading="lazy" decoding="async" alt="KashCake's list of upcoming dates" /></div>
            </figure>
          </div>
          <p className="tool">
            <img src={img('mcp.webp')} alt="" width={40} height={40} loading="lazy" decoding="async" />
            <span><a href={MCP}><strong>iCloud Calendar MCP</strong></a>: calendar access for AI agents.</span>
          </p>
        </div>
      </section>

      <section className="talkband">
        <div className="wrap">
          <div className="talk" id="talk">
            <div>
              <h2>Let's build it.</h2>
              <a className="btn" href={mail()}>Contact us</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <div className="foot-row">
            <a className="name small" href="/"><img src={img('logo.svg')} alt="" width={28} height={28} />OneKash Labs</a>
            <a className="sponsor" href="https://github.com/sponsors/one-kash">Support our work</a>
          </div>
          <AskAbout />
          <p className="copy">© 2026 OneKash Labs</p>
        </div>
      </footer>
    </Layout>
  );
}
