import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import PrimaryInput from '../components/Input/PrimaryInput';
import PrimaryButton from '../components/Button/PrimaryButton';
import SelectInput from '../components/Input/SelectInput';
import DatePickerButton from '../components/Button/DatePickerButton';
import { Formik, Field } from 'formik';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';
import i18n from '../locales';

const profileSettingsValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required(i18n.t('Common.First Name is required')),
  lastName: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required(i18n.t('Common.First Name is required')),
  gender: yup.string().required(i18n.t('Common.First Name is required')),
});

interface MyFormValues {
  firstName: string;
  lastName: string;
  gender: string;
}

function ProfileDetails() {
  const navigate = useNavigate();
  const initialValues: MyFormValues = { firstName: '', lastName: '', gender: 'erkek' };
  function nextUserProfileSettings(e: any) {
    console.log('e', e);
    // navigate('/profile-country');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Profile Details</Text>
      </View>
      <View>
        <Formik
          validationSchema={profileSettingsValidationSchema}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}>
          {({ handleSubmit, isValid, values }) => (
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
              <Field component={SelectInput} label={i18n.t('components.Last Name')} name="gender" />
              <DatePickerButton />
              <PrimaryButton
                customCss={styles.login}
                clicked={() => nextUserProfileSettings(values)}
                type="Primary"
                validation={!isValid}
                title={i18n.t('components.Continue')}
              />
            </>
          )}
        </Formik>
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
  login: {
    marginTop: 23,
  },
});

export default ProfileDetails;
