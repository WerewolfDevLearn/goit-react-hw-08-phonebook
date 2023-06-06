import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ILogin } from '../../types';
import { useAppDispatch } from '../../redux/store';
import { userlogin } from '../../redux/authOps';
import usePHBState from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import routes from '../routes';
import ContactFormStl from './ContactForm.module.css';

const initialValues = { email: '', password: '' };
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const { user } = usePHBState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.profile.name) {
      navigate(routes.contacts);
    }
  }, [navigate, user.profile.name]);

  const onSubmitFormik = (values: ILogin, { resetForm }: FormikHelpers<ILogin>) => {
    dispatch(userlogin(values));
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitFormik} validationSchema={schema}>
      <Form className={ContactFormStl.ContactForm}>
        <label className={ContactFormStl.label} htmlFor='email'>
          Email
          <Field type='email' name='email' className={ContactFormStl.input} />
          <ErrorMessage name='email' />
        </label>
        <label className={ContactFormStl.label} htmlFor='password'>
          Password
          <Field type='password' name='password' className={ContactFormStl.input} />
          <ErrorMessage name='password' />
        </label>
        <button type='submit' className={ContactFormStl.buttonSubmit}>
          Login
        </button>
      </Form>
    </Formik>
  );
}
