import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <ul className={styles.list}>
    <li className={styles.listItem}>
      <NavLink
        to="/"
        exact
        className={styles.static}
        activeClassName={styles.active}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.listItem}>
      <NavLink
        to="/pets"
        className={styles.static}
        activeClassName={styles.active}
      >
        Pets
      </NavLink>
    </li>
    <li className={styles.listItem}>
      <NavLink
        to="/about"
        className={styles.static}
        activeClassName={styles.active}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
