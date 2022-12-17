import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navOptions}>Profile</li>
        <li className={styles.navOptions}>Massages</li>
        <li className={styles.navOptions}>News</li>
        <li className={styles.navOptions}>Music</li>
        <li className={styles.navOptions}>Settings</li>
      </ul>
    </nav>
  )
}