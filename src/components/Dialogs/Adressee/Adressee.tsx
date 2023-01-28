import styles from './adressee.module.css';

interface IAdressee {
  name: string
  message: string
}

export const Adressee = (props: IAdressee) => {
  return (
    <div className={styles.adressee}>
     <p className={styles.name}>{props.name}</p>
     <p className={styles.text}>{props.message}</p> 
    </div>
  )
}