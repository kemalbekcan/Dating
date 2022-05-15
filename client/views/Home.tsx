import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Divider from '../components/Divider/Divider';
import IconBox from '../components/Box/IconBox';
import { AntDesign } from '@expo/vector-icons';
import IconButton from '../components/Button/IconButton';
import i18n from '../locales';
import { connect } from 'react-redux';
import Logo from '../assets/Logo.svg';
import PrimaryButton from '../components/Button/PrimaryButton';
import { useNavigate } from 'react-router-native';
import { useFonts } from 'expo-font';

function Home({ tasks, router }: any) {
  const navigate = useNavigate();
  let [fontsLoaded] = useFonts({
    'Basic-Regular': require('../assets/fonts/Basic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  function onPress() {
    navigate('/login');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.actions}>
        <Text style={styles.description}>{i18n.t('Home.Sign up to continue')}.</Text>
        <PrimaryButton
          clicked={onPress}
          type={'Primary'}
          title={i18n.t('Home.continue with email')}
        />
        <PrimaryButton
          clicked={onPress}
          type={'Secondary'}
          title={i18n.t('Home.use phone number')}
        />
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
      <StatusBar style="auto" />
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
  header: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actions: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontFamily: 'Basic-Regular',
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 32,
  },
  bottom: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconSignupButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingLeft: 40,
    paddingRight: 40,
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
});

function mapStateToProps(state: any) {
  return {
    tasks: state.task.tasks,
    router: state.route.router,
  };
}

export default connect(mapStateToProps)(Home);
