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
        {project.source[0] === "image" && (
          // <Image
          //   className={styles.image}
          //   src={project.source[1]}
          //   alt="Project preview"
          //   fill
          //   sizes="(max-width:768px) 100%,
          // (max-width:1200px) 50%,
          // 33%"
          // />
          <img
            alt="Project preview"
            src={project.source[1]}
            className={styles.image}
          />
        )}
        {project.source[0] === "video" && (
          <video autoPlay muted controls className={styles.image}>
            <source src={project.source[1]} type="video/mp4" />
          </video>
        )}

        <div className={styles.technical}>
          <ul className={styles.tools}>
            {project.tools.map((tool, index) => (
              <li key={index}>
                <p>{tool}</p>
              </li>
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
  );
}

export default ProjectCard;
