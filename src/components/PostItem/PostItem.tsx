import styles from './PostItem.module.css';
import { avatar } from '../../assets/assets';

interface IPost {
  avatar?: string
  text: string
}

export const PostItem = (props: IPost) => {
  return (
    <div className={styles.postWrap}>
      <div className={styles.iconWrap}>
        <img src={avatar} alt='avatar' />
      </div>
      <p className={styles.postWrapTxt}>{props.text}</p>
    </div>
  )
}