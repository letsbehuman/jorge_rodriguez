import Image from "next/image";
import styles from "../styles/Landing.module.scss";
import Portrait from "../public/assets/img/portrait.jpg";

const Landing = () => {
  return (
    <div id="landing" className={styles.section}>
      <div className={styles.title}>
        <h4>
          {"Hi there! I'm "}
          <span className={styles.myName}>{"Jorge,"}</span>
          {}
        </h4>
        <h1>{"Committed to Enhancing Lives Sustainably"}</h1>
        <h2>{"through web solutions"}</h2>
      </div>
      <div className={styles.portrait}>
        <Image
          alt="Portrait Jorge"
          src={Portrait}
          fill
          className={styles.imgPortrait}
        />
      </div>
      <div className={styles.box}></div>
    </div>
  );
};

export default Landing;
