import React, { FC } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';
import PrimaryButton from '../components/Button/PrimaryButton';
import { Formik } from 'formik';
import * as yup from 'yup';

interface MyFormValues {
  email?: any;
  password?: any;
}

const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email').required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Signin: FC<MyFormValues> = () => {
  const initialValues: MyFormValues = { email: '', password: '' };
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
          <>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              placeholder="E-posta"
            />
            {errors.email && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}

            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry
            />

            {errors.password && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
            )}
            <PrimaryButton title="Giriş Yap" validation={!isValid} clicked={handleSubmit} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 50,
    marginBottom: 150,
  },
  facebookButton: {
    backgroundColor: '#3040D0',
    height: 45,
    width: '72%',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#3040D0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    height: 45,
    width: '72%',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  emailButton: {
    backgroundColor: '#000000',
    height: 45,
    width: '72%',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  textUnderline: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
  privacyPolicy: {
    marginTop: 20,
  },
  forgotPassword: {
    marginTop: 105,
  },
  iconButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '25%',
  },
});

export default Signin;
