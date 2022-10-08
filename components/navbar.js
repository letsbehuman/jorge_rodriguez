import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.scss';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../utils/navContent.js';

const Navbar = () => {
  const [isActive, setIsActive] = useState();
  const [menuOpen, setmenuOpen] = useState(false);
  const [size, setSize] = useState({ width: undefined, height: undefined });
  const navLinkHandle = (e) => {
    const name = e.target.innerText.toLowerCase();
    setIsActive(name);
  };
  const menuHandle = () => {
    setmenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 700 && menuOpen) {
      setmenuOpen(false);
    }
  }, [size.width, menuOpen]);

  return (
    <div className={styles.section}>
      <Link href="/">
        <div className={styles.logo}>J</div>
      </Link>

      <nav
        className={menuOpen ? `${styles['isMenu']}` : `${styles.navContent}`}
      >
        <ul className={styles.navLinks} onClick={(e) => navLinkHandle(e)}>
          {navLinks.map((navLink, index) => {
            const { id, title, dir } = navLink;
            return (
              <li
                key={index}
                className={isActive === `#${id}` ? styles.selectedNav : ''}
                onClick={menuHandle}
              >
                <a href={dir}>{title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {!menuOpen ? (
        <AiOutlineMenu className={styles.menuIcon} onClick={menuHandle} />
      ) : (
        <AiOutlineClose className={styles.menuIcon} onClick={menuHandle} />
      )}
    </div>
  );
};

export default Navbar;
