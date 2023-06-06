import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import Loader from './Loader/Loader';
import Section from './Layout/Section';
import PrivateRoutes from '../utils/PrivateRoutes';
import 'normalize.css';

// lazy
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routes.home} element={<Section />}>
            <Route index element={<HomePage />} />
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.register} element={<RegisterPage />} />
            <Route element={<PrivateRoutes />}>
              <Route path={routes.contacts} element={<ContactsPage />} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
