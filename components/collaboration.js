import Image from "next/image";
import styles from "../styles/Collaboration.module.scss";
import ImgCollaboration from "../public/assets/img/volunteers.jpg";
const Collaboration = () => {
  return (
    <div id="collaboration" className={styles.section}>
      <div className={styles.bgImg}>
        <h2>{"We don't need money to work together"}</h2>
        <Image
          src={ImgCollaboration}
          alt="Volunteers"
          fill
          className={styles.image}
        />
      </div>
      <h4>
        {
          " I believe that we can help each other in many ways. If your project is trying to do good to others, do not hesitate to contact me and we will see how we can collaborate."
        }
      </h4>
    </div>
  );
};

export default Collaboration;
