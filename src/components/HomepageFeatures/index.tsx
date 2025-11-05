import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import IdealImage from '@theme/IdealImage';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgUrl: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Overcoming Fear',
    imgUrl: 'curious_creature.jpg',
    description: (
      <>
        Society has conditioned us to believe that you can only be an artist if you truly
        devote your life to art. I choose not to believe in this falacy. I believe art
        can be a healing force of nature especially if you surround yourself with other
        expressive individuals.
      </>
    ),
  },
  {
    title: 'Get in touch',
    imgUrl: 'self_portrait_as_teen.jpg',
    description: (
      <>
        If you feel there is something you particularly like or would like to set up a commission.
        You can contact me via <a href="https://wa.me/message/KTBDJDBAAF7HL1">WhatsApp</a> or <a href="https://www.instagram.com/woza.art/">Instagram</a> found on this website and we can setup a session.
      </>
    ),
  },
  {
    title: 'Documenting and Preserving',
    imgUrl: 'the_looking_glass.jpg',
    description: (
      <>
        Not only is this website a testament to my dedication of the arts and my community.
        I hope to be able to document what I demonstrate so that I can help others and myself.
      </>
    ),
  },
];

function Feature({ title, imgUrl, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <IdealImage img={`https://tcaspiuafowfizfjesvj.supabase.co/storage/v1/object/public/artwork-images/${imgUrl}`} />
      </div>
      <div className="text--center padding--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
