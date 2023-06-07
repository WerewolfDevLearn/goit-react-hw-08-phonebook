import usePHBState from '../../redux/selectors';
import { Outlet, Navigate } from 'react-router-dom';
import routes from '../routes';

export default function PrivateRoutes() {
  const {
    user: { profile },
  } = usePHBState();

  return profile.name ? <Outlet /> : <Navigate to={routes.login} />;
}
