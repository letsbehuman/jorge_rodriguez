import styles from '../../styles/Contact.module.scss';

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.header}>
        <div className={styles.break}></div>
        <h3 className="">Get in touch</h3>
      </div>
      <div>
        <div>Let's work together</div>
        <div>
          <ul>
            <li>
              <a href=""></a>github
            </li>
            <li>
              <a href=""></a>linkedin
            </li>
            <li>
              <a href=""></a>codewars
            </li>
          </ul>
        </div>
        <div>
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
