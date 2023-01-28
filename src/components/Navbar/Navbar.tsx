import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navOptions}>
          <NavLink to='/profile'>
          Profile
          </NavLink>
        </li>
        <li className={styles.navOptions}>
          <NavLink to='/dialogs'>
            Messages
          </NavLink>
        </li>
        <li className={styles.navOptions}>
          <NavLink to='/news'>
            News
          </NavLink>
        </li>
        <li className={styles.navOptions}>
          <NavLink to='/music'>
            Music
          </NavLink>
        </li>
        <li className={styles.navOptions}>
          <NavLink to='/settings'>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}