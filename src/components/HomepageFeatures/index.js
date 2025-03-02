import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Calico Open Source',
    img: '/img/calico-logo.png',
    link: 'calico/about',
    description: <>Calico Open Source is a free, self-managed networking and security solution for containers, virtual machines, and native host-based workloads. Calico provides networking, network policy, and IP address management capabilities for your cloud-native applications.</>,
  },
  {
    title: 'Calico Cloud',
    img: '/img/calico-cloud-logo.png',
    link: 'calico-cloud',
    description: <>Calico Cloud is a pay-as-you-go, SaaS application that provides comprehensive container security across the entire container lifecycle. In addition to being a fully managed version Calico Enterprise, Calico Cloud provides additional security capabilities across the entire (insert synonym for "lifecycle"😉)</>,
  },
  {
    title: 'Calico Enterprise',
    img: '/img/calico-enterprise-logo.png',
    link: 'calico-enterprise/about-calico-enterprise',
    description: <><p>Calico Enterprise is a paid, self-managed security and observability solution for containers and Kubernetes. Calico Enterprise extends Calico Open Source’s networking and network security capabilities to offer more advanced security and observability capabilities for organizations running Kubernetes at scale.</p></>,
  },
];

function Feature({ img, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Link href={link}>
          <img
            src={img}
            alt={title}
          />
        </Link>
      </div>
      <div className='text--center padding-horiz--md'>
        <h1>{title}</h1>
        <p className={clsx(styles.featureDescription, 'text--justify')}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
