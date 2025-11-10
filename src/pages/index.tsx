import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import EventCatalogue from '@site/src/events/EventCatalogue';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Woza ART
        </Heading>
        <p className="hero__subtitle">The very best art events within reach!</p>
        <div className="container">
          <div className={styles.buttonFlex}>
            <div>
              <Link
                className="button button--primary button--lg"
                to="/docs/subscribe">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The very best art events within reach!">
      <HomepageHeader />
      <main>
        <EventCatalogue />
      </main>
    </Layout>
  );
}
