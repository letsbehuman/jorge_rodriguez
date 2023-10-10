import ProjectCard from "./projectCard";
import styles from "../styles/Projects.module.scss";
import { projectList } from "../utils/projectList";
const Projects = () => {
  return (
    <div id="projects" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.break}></div>
        <h3 className="">My projects</h3>
      </div>
      <p className={styles.myGoal}>
        {
          "I thrive on cooking up fresh ideas and turning them into projects that not only teach me new tools but also have the potential to make a real difference. My sights are set on teaming up with passionate folks for big, impactful projects that can shape a better world."
        }
      </p>
      {projectList.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  );
};

export default Projects;
