import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
function Signin() {
  return (
    <LinearGradient
      colors={['rgba(239, 10, 106, 1)', 'rgba(182, 53, 156, 1)']}
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text>sad</Text>
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

export default Signin;
