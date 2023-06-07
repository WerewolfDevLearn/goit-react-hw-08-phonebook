import usePHBState from '../../redux/selectors';
import { Outlet, Navigate } from 'react-router-dom';
import routes from '../routes';

export default function PubliceRoutes() {
  const {
    user: { profile },
  } = usePHBState();

  return profile.name ? <Navigate to={routes.contacts} /> : <Outlet />;
}
