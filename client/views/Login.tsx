import { StyleSheet, SafeAreaView, Text } from 'react-native';
import PrimaryInput from '../components/Input/PrimaryInput';
import { Formik, Field } from 'formik';
import PrimaryButton from '../components/Button/PrimaryButton';
import i18n from '../locales';
import * as yup from 'yup';

const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18n.t('Login.Please enter valid email'))
    .required(i18n.t('Login.Email is required')),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required(i18n.t('Login.Password is required')),
});

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}>
        {({ handleSubmit, isValid }) => (
          <>
            <Field
              component={PrimaryInput}
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
            />
            <Field
              component={PrimaryInput}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Text>{isValid}</Text>
            <PrimaryButton
              clicked={handleSubmit}
              validation={!isValid}
              title={i18n.t('Login.Sign in')}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
