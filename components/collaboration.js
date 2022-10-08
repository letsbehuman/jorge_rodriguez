import Image from 'next/image';
import styles from '../styles/Collaboration.module.scss';
import ImgCollaboration from '../public/assets/img/volunteers.jpg';
const Collaboration = () => {
  return (
    <div id="collaboration" className={styles.section}>
      <div className={styles.bgImg}>
        <h2>{"We don't need money to work together"}</h2>
        <Image
          src={ImgCollaboration}
          alt="Volunteers"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <h4>
        {
          ' I belive that we can help each others in many ways. If your project is trying to do well to others, do not hesitate to contact me and we will see a way to collaborate.'
        }
      </h4>
    </div>
  );
};

export default Collaboration;
