import * as React from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

import styles from '../css/navbar.module.css';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [isOpen, setNav] = React.useState(false);

  const toggleNav = () => {
    setNav(!isOpen);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Backroads Logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight/>
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, idx) => (<li key={idx}><Link to={item.path}>{item.text}</Link></li>))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, idx) => <a key={idx} href={item.url} target="_blank">{item.icon}</a>)}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;