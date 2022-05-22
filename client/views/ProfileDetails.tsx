import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import PrimaryInput from '../components/Input/PrimaryInput';
import PrimaryButton from '../components/Button/PrimaryButton';
import SelectInput from '../components/Input/SelectInput';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import i18n from '../locales';

const signUpValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required(i18n.t('Common.First Name is required')),
  lastName: yup
    .string()
    .matches(/\d/, 'Password must have a number')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required(i18n.t('Common.First Name is required')),
});

interface MyFormValues {
  firstName: string;
  lastName: string;
}

function ProfileDetails() {
  const initialValues: MyFormValues = { firstName: '', lastName: '' };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Profile Details</Text>
      </View>
      <View>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}>
          {({ handleSubmit, isValid }) => (
            <>
              <Field
                component={PrimaryInput}
                label={i18n.t('components.First Name')}
                name="firstName"
                placeholder="First Name"
              />
              <Field
                component={PrimaryInput}
                label={i18n.t('components.Last Name')}
                name="lastName"
                placeholder="Last Name"
                secureTextEntry
              />
              <Field
                component={SelectInput}
                label={i18n.t('components.Last Name')}
                name="lastName"
                placeholder="Last Name"
              />
            </>
          )}
        </Formik>
      </View>
      <View>
        {/* <PrimaryButton type="Primary" title="Continue" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
  },
});

export default ProfileDetails;
