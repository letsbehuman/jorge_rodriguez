import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.scss';
import { aboutContent } from '../utils/aboutContent';

const About = () => {
  const [contentActive, setContentActive] = useState();
  const [tabActived, setTabActived] = useState();

  useEffect(() => {
    setContentActive(aboutContent[0]);
    setTabActived(1);
  }, []);

  const contentHandle = (e) => {
    const id = Number(e.target.id);
    const currentContent = aboutContent.find((content) => content.id === id);
    setTabActived(id);
    setContentActive(currentContent);
    console.log(id);
  };

  if (!contentActive) return 'Loading...';
  return (
    <div id="about" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.break}></div>
        <h3>{'About me'}</h3>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.tabContainer}>
          {aboutContent.map((content, index) => {
            const { id, tabName } = content;
            return (
              <button
                key={index}
                id={id}
                onClick={(e) => contentHandle(e)}
                className={
                  tabActived === id
                    ? styles[`tabActive--${id}`]
                    : styles[`tab--${id}`]
                }
              >
                {tabName}
              </button>
            );
          })}
        </div>
        <div className={styles[`${contentActive.tabStyle}`]}>
          <h4>{contentActive.header}</h4>
          <p>{contentActive.body}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
