import Image from 'next/image';
import styles from '../../styles/Landing.module.scss';
import Portrait from '../../public/assets/img/P1010076B.JPG';

const Landing = () => {
  return (
    <div id="landing" className={styles.section}>
      <div className={styles.title}>
        <h4>
          Hi there! I am <span className={styles.myName}>Jorge,</span> I want to
        </h4>
        <h1>support projects that improve life in a sustainable way</h1>
        <h2>with web solutions</h2>
      </div>
      <div className={styles.portrait}>
        <Image
          alt="foto"
          src={Portrait}
          layout="fill"
          objectFit="cover"
          objectPosition="30% 100%"
          className={styles.imgPortrait}
        />
      </div>
      <div className={styles.box}></div>
    </div>
  );
};

export default Landing;
