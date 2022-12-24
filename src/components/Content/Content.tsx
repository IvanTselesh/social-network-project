import styles from "./content.module.css";
import { avatar, banner } from "../../assets/assets";
import { Button } from "../Button/Button";
import { ProfileItem } from "../ProfileItem/ProfileItem";
import { PostItem } from "../PostItem/PostItem";

export const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.bannerWrap}>
        <img className={styles.bannerWrapImg} src={banner} alt="banner" />
      </div>
      <div className={styles.privateData}>
        <div className={styles.avatarWrap}>
          <img className={styles.avatarWrapImg} src={avatar} alt="avatar" />
        </div>
        <div className={styles.privateDataInfo}>
          <div className={styles.privateDataInfoName}>John Dick</div>
          <div className={styles.privateDataInfoContent}>
            <ProfileItem name="Birth" value="June 21" />
            <ProfileItem name="City" value="Polotsk" />
            <ProfileItem name="Education" value='BSEU' />
            <ProfileItem name='Website' value='js.com' />
          </div>
        </div>
      </div>
      <div className={styles.myPosts}>
        My Posts
        <div className={styles.myPostsNew}>
          <input type="text"></input>
          <Button onClick={() => {}} name='Send' />
        </div>
        <div className={styles.MyPostsList}>
          <PostItem text="hi! I`m here for any entertainment" />
        </div>
      </div>
    </div>
  );
}
