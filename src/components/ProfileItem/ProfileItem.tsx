import styles from './profileItem.module.css';

interface IProfileItem {
  name: string
  value: string
}

export const ProfileItem = (props: IProfileItem) => {
  return <p className={styles.paragraph}>{props.name}: {props.value}</p>
}