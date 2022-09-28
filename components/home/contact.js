import styles from '../../styles/Contact.module.scss';
import linkedin from '../../public/assets/social/linkedin.png';
import codewars from '../../public/assets/social/codewars.png';
import github from '../../public/assets/social/github.png';
import Image from 'next/image';

const Contact = () => {
  return (
    <div id="contact" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.break}></div>
        <h3 className="">Get in touch</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.socialSection}>
          <div>Let's work together</div>
          <ul>
            <li className={styles.socialIcon}>
              <a href="https://github.com/letsbehuman">
                <Image src={github} layout="fill" objectFit="cover" />
              </a>
            </li>
            <li className={styles.socialIcon}>
              <a href="https://www.codewars.com/users/letsbehuman">
                <Image src={codewars} layout="fill" objectFit="cover" />
              </a>{' '}
            </li>
            <li className={styles.socialIcon}>
              <a href="https://www.linkedin.com/in/jorgerodriguezvega-953564121/">
                <Image src={linkedin} layout="fill" objectFit="cover" />
              </a>{' '}
            </li>
          </ul>
        </div>
        <div className={styles.break}></div>
        <div className={styles.emailSection}>
          <div>
            <a href="">letsbehumandesign@gmail.com</a>
          </div>
          <div>
            <a href="">My resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
