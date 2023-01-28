import styles from './message.module.css';

interface IMessage {
  text: string
  name?: string
  time: string
}

export const Message = (props: IMessage) => {
  return (
    <div className={styles.messageWrap}>
      <p className={styles.messageWrapName}>{props.name}</p>
      <div className={styles.messageWrapContent}>
      <span>{props.text}</span>
      <span className={styles.messageWrapTime}>{props.time}</span>
      </div>
    </div>
  )
}