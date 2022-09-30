import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.scss';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { navLinks } from '../utils/navContent.js';

const Navbar = () => {
  const [isActive, setIsActive] = useState();

  const navLinkHandle = (e) => {
    const hash = e.target.hash;
    setIsActive(hash);
  };

  return (
    <div className={styles.section}>
      <div className="">
        <Link href="/">
          <div className={styles.logo}>J</div>
        </Link>
      </div>
      <div>
        <ul className={styles.navlinks} onClick={(e) => navLinkHandle(e)}>
          {navLinks.map((navLink, index) => {
            const { id, title, dir } = navLink;
            return (
              <li
                key={index}
                className={isActive === `#${id}` ? styles.selectedNav : ''}
              >
                <a href={dir}>{title}</a>
              </li>
            );
          })}
        </ul>
        {/* <div>
          <AiOutlineMenu />
        </div> */}
      </div>

      {/* <div className="menu-overlay">
        <div className="menu">
          <div>
            <AiOutlineClose />
          </div>
          <div>
            <ul>
              <Link href="/#projects">
                <li>Projects</li>
              </Link>
              <Link href="/#about">
                <li>About</li>
              </Link>
              <Link href="/#contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
