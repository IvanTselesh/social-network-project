import { logo } from '../../assets/assets';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerImg}>
        <img className={styles.headerImgContent} src={logo} alt="logo" />
      </div>
    </header>
  )
};