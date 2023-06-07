import usePHBState from '../../redux/selectors';
import { Outlet, Navigate } from 'react-router-dom';
import routes from '../routes';

export default function RestrictedRoutes() {
  const { user } = usePHBState();
  console.log(user.token);
  return user.token ? <Navigate to={routes.contacts} /> : <Outlet />;
}
