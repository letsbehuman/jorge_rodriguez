import ProjectCard from './projectCard';
import styles from '../styles/Projects.module.scss';
import { projectList } from '../utils/projectList';

const Projects = () => {
  // console.log(projectList, 'hi');
  return (
    <div id="projects" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.break}></div>
        <h3 className="">My projects</h3>
      </div>
      <p className={styles.myGoal}>
        {
          'I am constantly thinking of new ideas to create projects that help me learn new tools. My goal is to work with a team in more complex and larger projects that can improve the way we live in this planet.'
        }
      </p>
      <div>
        {projectList.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;