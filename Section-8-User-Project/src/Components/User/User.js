import styles from "./User.module.css";

const User = (props) => {
  return <div className={styles.user}>{props.userName}</div>;
};

export default User;
