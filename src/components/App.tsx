import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import Loader from './Loader/Loader';
import Section from './Layout/Section';
import PrivateRoutes from './Routes/PrivateRoutes';
import usePHBState from '../redux/selectors';
import 'normalize.css';
import { useAppDispatch } from '../redux/store';
import { getCurrent } from '../redux/auth/authOps';
import PubliceRourtes from './Routes/PubliceRoutes';
// import HomePage from '../pages/HomePage';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';
// import ContactsPage from '../pages/ContactsPage';
// import ErrorPage from '../pages/ErrorPage';
// // lazy
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export default function App() {
  const { isRefreshing } = usePHBState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.home} element={<Section />}>
          <Route element={<PubliceRourtes />}>
            <Route index element={<HomePage />} />
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.register} element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={routes.contacts} element={<ContactsPage />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
