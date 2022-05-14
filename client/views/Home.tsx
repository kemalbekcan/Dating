import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import IconButton from '../components/Button/IconButton';
import i18n from '../locales';
import { connect } from 'react-redux';

function Home({ tasks, router }: any) {
  return (
    <LinearGradient
      colors={['rgba(239, 10, 106, 1)', 'rgba(182, 53, 156, 1)']}
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <View style={styles.header}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: '700' }}>
            {i18n.t('Home.welcome')}
          </Text>
          <Text
            style={{
              color: 'white',
              marginTop: 5,
              marginBottom: 20,
              fontSize: 20,
              fontWeight: '700',
            }}>
            {i18n.t('Home.We were waiting for you too')}.
          </Text>
        </View>
        <View style={styles.facebookButton}>
          <Entypo name="facebook-with-circle" size={24} color="white" style={{ marginRight: 20 }} />
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>
            Facebook ile devam et
          </Text>
        </View>
        <View style={styles.googleButton}>
          <AntDesign name="google" size={24} color="black" style={{ marginRight: 20 }} />
          <Text style={{ color: '#000000', fontWeight: 'bold', textAlign: 'center' }}>
            Google ile devam et
          </Text>
        </View>
        <IconButton title={i18n.t('Home.continue with email')} />
        <View style={styles.privacyPolicy}>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>
            {i18n.t('Home.by signing up')},{' '}
            <Text style={styles.textUnderline}>
              {i18n.t('Home.you agree to our General Terms of Use')}
            </Text>{' '}
            {i18n.t('Home.and')}
          </Text>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>
            <Text style={styles.textUnderline}>{i18n.t('Home.privacy policy')}</Text> kabul etmiş
            olursunuz.
          </Text>
        </View>
        <View style={styles.forgotPassword}>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: '700' }}>
            {i18n.t('Home.I forgot my password')} ?
          </Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </LinearGradient>
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

function mapStateToProps(state: any) {
  return {
    tasks: state.task.tasks,
    router: state.route.router,
  };
}

export default connect(mapStateToProps)(Home);
