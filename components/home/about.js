import { useRouter } from 'next/router';
import styles from '../../styles/About.module.scss';

const About = () => {
  const router = useRouter();
  return (
    <div id="about" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.break}></div>
        <h3 className="">About me</h3>
      </div>
      <div>
        <div>
          <ul>
            <li>tile1</li>
            <li>tile2</li>
            <li>tile3</li>
            <li>tile4</li>
          </ul>
        </div>
        <div>
          <div>
            <h4>title</h4>
            <p>mucho texto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
