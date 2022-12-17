import styles from "./content.module.css";

export const Content = () => {
  return (
    <div className={styles.content}>
      <div>
        Banner
        <img />
      </div>
      <div>
        Private data
        <div>
          <img src="#" alt="avatar" />
        </div>
        <div>personal info</div>
      </div>
      <div>
        My Posts
        <div>new post</div>
        <div>post list</div>
      </div>
    </div>
  );
};
