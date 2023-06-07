import usePHBState from '../../redux/selectors';
import { Outlet, Navigate } from 'react-router-dom';
import routes from '../routes';

export default function PrivateRoutes() {
  const { user } = usePHBState();
  console.log('user:PrivateRoutes ', !user.token);

  return user.token ? <Outlet /> : <Navigate to={routes.login} />;
}
