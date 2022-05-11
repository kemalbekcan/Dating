import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from '../components/Button/PrimaryButton';

function Signup() {
  function onClick() {
    // validation
    console.log('signup');
  }
  return (
    <LinearGradient
      colors={['rgba(239, 10, 106, 1)', 'rgba(182, 53, 156, 1)']}
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <TextInput placeholder="E-posta" />
        <TextInput placeholder="Password" secureTextEntry={true} />
        <TextInput placeholder="Doğrula" secureTextEntry={true} />
        <PrimaryButton title="Giriş Yap" clicked={onClick} />
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
});

export default Signup;
