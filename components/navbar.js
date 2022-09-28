import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Navbar.module.scss';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className={styles.section}>
      <div className="">
        {/* <Link href="/">
          <Image
            // src="/../../public/assets/social/codewars.png"
            href="/"
            alt="logo"
            width="125"
            height="50"
          />
        </Link> */}
      </div>
      <div>
        <ul className={styles.navlinks}>
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
