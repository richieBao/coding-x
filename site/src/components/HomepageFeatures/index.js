import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learning Programming Languages',
    Svg: require('@site/static/img/programming.svg').default, // replace with your icon
    description: (
      <>
        Start with Python, then explore C, C++, and C# via comparative learning.
        Coding-X aims to build a cross-language platform that helps learners quickly
        master fundamentals and transfer skills between languages.
      </>
    ),
  },
  {
    title: 'Exploring Algorithm Logic',
    Svg: require('@site/static/img/algorithm.svg').default,
    description: (
      <>
        Algorithms are the core logic of problem-solving. Interactive charts make
        computational steps and results visible, enabling deeper understanding and
        extension beyond traditional textbooks.
      </>
    ),
  },
  {
    title: 'Integrating Professional Knowledge',
    Svg: require('@site/static/img/integration.svg').default,
    description: (
      <>
        Integrate spatial data analysis, intelligent design methods, embedded systems,
        digital construction, and AR/VR simulation. Coding-X develops data tools,
        design tools, and broader applications that expand professional boundaries.
      </>
    ),
  },
  {
    title: 'From Digital Construction to Maker Culture',
    Svg: require('@site/static/img/maker.svg').default,
    description: (
      <>
        Build on microcontrollers, embedded systems, and open-source robotics (ROS).
        Programming meets hardware: prototype devices, learn by making, and explore
        interactive toolchains for design assistance.
      </>
    ),
  },
  {
    title: 'Game Engines for AR/VR Applications',
    Svg: require('@site/static/img/gameengine.svg').default,
    description: (
      <>
        Leverage Unreal/Unity for domain applications—architecture, medicine,
        engineering, and art. Combine simulation with hardware; C++/C# provide the
        foundation for immersive interaction and limitless possibilities.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
