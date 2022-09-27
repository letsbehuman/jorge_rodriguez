import ProjectCard from '../projectCard';
import styles from '../../styles/Projects.module.scss';
import { projectList } from '../../utils/projectList';

const Projects = () => {
  // console.log(projectList, 'hi');
  return (
    <div id="projects" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.break}></div>
        <h3 className="">My projects</h3>
      </div>
      <div>
        {projectList.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
