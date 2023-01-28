import { Adressee } from './Adressee/Adressee';
import styles from './dialogs.module.css';
import { Message } from './Message/Message';

export const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsUsers}>adresaty
        <Adressee name='Alfa Romeo' message='Hi! I`m in stuck.q;wcefmqjwenfxjqwnecfknq2jxkefnwncfkjqnwlekfnxwjkqnfjcwqn' />
      </div>
      <div className={styles.dialogsMessages}>perepiska
        <Message text='Hi! Thank you!' time='21:04' />
      </div>
    </div>
  )
}