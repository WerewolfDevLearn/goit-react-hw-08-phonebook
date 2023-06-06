import usePHBState from '../redux/selectors';
import { Outlet, Navigate } from 'react-router-dom';
import routes from '../components/routes';

export default function PrivateRoutes() {
  const { user } = usePHBState();

  return user.token ? <Outlet /> : <Navigate to={routes.login} />;
}
