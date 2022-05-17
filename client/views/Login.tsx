import React, { FC } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import PrimaryInput from '../components/Input/PrimaryInput';
import { Formik, Field } from 'formik';
import PrimaryButton from '../components/Button/PrimaryButton';
import Divider from '../components/Divider/Divider';
import IconBox from '../components/Box/IconBox';
import RadioButton from '../components/Button/RadioButton';
import Logo from '../assets/Logo.svg';
import i18n from '../locales';
import * as yup from 'yup';

const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18n.t('Login.Please enter valid email'))
    .required(i18n.t('Login.Email is required')),
  password: yup
    .string()
    .matches(/\d/, 'Password must have a number')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required(i18n.t('Login.Password is required')),
});

interface MyFormValues {
  email: string;
  password: string;
}

const Login: FC<null> = () => {
  const initialValues: MyFormValues = { email: '', password: '' };
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}>
        {({ handleSubmit, isValid }) => (
          <>
            <Field
              component={PrimaryInput}
              label="Email"
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
            />
            <Field
              component={PrimaryInput}
              label="Password"
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <PrimaryButton
              clicked={handleSubmit}
              type="Primary"
              validation={!isValid}
              title={i18n.t('Login.Sign in')}
            />
          </>
        )}
      </Formik>
      <RadioButton />
      <Divider description={i18n.t('Home.or sign up with')} />
      <View style={styles.iconSignupButtons}>
        <IconBox brand="facebook" />
        <IconBox brand="google" />
        <IconBox brand="apple" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSignupButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default Login;
