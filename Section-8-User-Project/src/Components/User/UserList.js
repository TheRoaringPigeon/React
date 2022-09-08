import User from './User';
import styles from './UserList.module.css';

const UserList = props => {

    return (
        <div className={styles['user-list']}>
            {props.users.map(user => (
                <User userName={user.userName} />
            ))}
        </div>
    );
};
export default UserList;