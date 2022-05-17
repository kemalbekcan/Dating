import React, { FC } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import PrimaryInput from '../components/Input/PrimaryInput';
import { Formik, Field } from 'formik';
import PrimaryButton from '../components/Button/PrimaryButton';
import Divider from '../components/Divider/Divider';
import IconBox from '../components/Box/IconBox';
import RadioButton from '../components/Button/RadioButton';
import BasicButton from '../components/Button/BasicButton';
import Logo from '../assets/Logo.svg';
import { Navigate, useNavigate } from 'react-router-native';
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

const Register: FC<any> = () => {
  const navigate = useNavigate();
  const initialValues: MyFormValues = { email: '', password: '' };
  function onPress() {
    navigate('/login');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.form}>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}>
          {({ handleSubmit, isValid }) => (
            <>
              <Field
                component={PrimaryInput}
                label={i18n.t('components.Email')}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={PrimaryInput}
                label={i18n.t('components.Password')}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <RadioButton />
              <PrimaryButton
                customCss={styles.login}
                clicked={handleSubmit}
                type="Primary"
                validation={!isValid}
                title={i18n.t('Login.Sign in')}
              />
              <BasicButton
                customCss={styles.text}
                clicked={onPress}
                title={'Don’t have an account?'}
                color={'red'}
                coloredText={'Login In'}
              />
            </>
          )}
        </Formik>
      </View>
      <Divider description={i18n.t('Home.or sign up with')} />
      <View style={styles.bottom}>
        <View style={styles.iconSignupButtons}>
          <IconBox brand="facebook" />
          <IconBox brand="google" />
          <IconBox brand="apple" />
        </View>
        <View style={styles.privacyPolicy}>
          <Text style={{ fontFamily: 'Basic-Regular', fontSize: 12 }}>Terms of use</Text>
          <Text style={{ fontFamily: 'Basic-Regular', fontSize: 12, marginLeft: 35 }}>
            Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
  },
  header: {
    flex: 0.7,
    display: 'flex',
    alignItems: 'center',
  },
  form: {
    flex: 2,
  },
  login: {
    marginTop: 23,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Basic-Regular',
  },
  bottom: {
    flex: 1.2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  privacyPolicy: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '61%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
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

export default Register;
