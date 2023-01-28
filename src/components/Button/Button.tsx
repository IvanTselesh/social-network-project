import styles from './Button.module.css';

interface IButton {
  onClick: () => void
  name: string
}

export const Button = (props: IButton) => {
  return <button className={styles.button} onClick={props.onClick}>{props.name}</button>
}