import React from 'react';
import styles from '../styles/ProjectCard.module.scss';
import Image from 'next/image';

function ProjectCard({ project }) {
  return (
    <div className={styles.container}>
      <div className={styles.project__info}>
        <h3>{project.title}</h3>
        <p>{project.description1}</p>
        <p>{project.description2}</p>
      </div>
      <div className={styles.project__img}>
        <Image
          src={project.img}
          layout="fill"
          objectFit="center"
          className={styles.preview}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
