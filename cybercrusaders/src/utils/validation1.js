import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  //mobileNumber: Yup.string().required('Mobile Number is required'),
});
