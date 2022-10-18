import React from "react";
import styles from "../styles/ProjectCard.module.scss";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

function ProjectCard({ project }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{project.title}</h3>
      <div className={styles.description}>
        <p>{project.description1}</p>
        <p>{project.description2}</p>
      </div>
      <div className={styles.project__preview}>
        {/* <div className={styles.preview}> */}
        <Image
          src={project.img}
          height="520"
          width="650"
          layout="intrinsic"
          alt="Project preview"
        />
        <div className={styles.technical}>
          <ul className={styles.tools}>
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          <div className={styles.seeMore}>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <FiGithub />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <IoOpenOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ProjectCard;
