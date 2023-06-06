import UserStyle from './UserMenu.module.css';
import { useAppDispatch } from '../../redux/store';
import { logOut } from '../../redux/authOps';
import { IUserMenu } from '../../types';

function UserMenu({ userName }: IUserMenu) {
  const dispatch = useAppDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <div className={UserStyle.list}>
      <p key='userName' className={UserStyle.navLink}>
        {userName}
      </p>

      <button type='button' className={UserStyle.btn} onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
}
export default UserMenu;
