import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/About.module.scss';
import { aboutContent } from '../../utils/aboutContent';

const About = () => {
  const [tabActive, setTabActive] = useState(aboutContent[0]);

  const tabHandle = (content) => {
    setTabActive(content);
  };

  const { id, header, body, tabStyle } = tabActive;
  return (
    <div id="about" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.break}></div>
        <h3 className="">About me</h3>
      </div>
      <div>
        <div className={styles.tabContainer}>
          {aboutContent.map((content) => {
            console.log(content.tabStyle);
            return (
              <button
                key={content.id}
                className={`${styles}.${tabStyle}`}
                onClick={() => tabHandle(content)}
              >
                {content.tab}
              </button>
            );
          })}
        </div>

        <div className={`${styles}.${tabStyle}`}>
          <h4>{header}</h4>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
