import usePHBState from '../../redux/selectors';
import { Outlet, Navigate } from 'react-router-dom';
import routes from '../routes';

export default function PubliceRoutes() {
  const { user } = usePHBState();

  return user.token ? <Navigate to={routes.contacts} /> : <Outlet />;
}
