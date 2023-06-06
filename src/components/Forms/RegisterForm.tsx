import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { IUser } from '../../types';
import { useAppDispatch } from '../../redux/store';
import { register } from '../../redux/authOps';
import ContactFormStl from './ContactForm.module.css';
import { useEffect } from 'react';
import usePHBState from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';
// import { toast } from 'react-toastify';

const initialValues = { name: '', email: '', password: '' };
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const { user } = usePHBState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.profile.name) {
      navigate(routes.contacts);
    }
  }, [navigate, user.profile.name]);

  const onSubmitFormik = (values: IUser, { resetForm }: FormikHelpers<IUser>) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmitFormik} validationSchema={schema}>
        <Form className={ContactFormStl.ContactForm}>
          <label className={ContactFormStl.label} htmlFor='email'>
            Name
            <Field type='text' name='name' className={ContactFormStl.input} />
            <ErrorMessage name='name' />
          </label>
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
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}
