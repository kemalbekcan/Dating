import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
import PrimaryButton from '../components/Button/PrimaryButton';

function Signup() {
  function onClick() {
    // validation
    console.log('signup');
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="E-posta" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <TextInput placeholder="Doğrula" secureTextEntry={true} />
      <PrimaryButton title="Giriş Yap" clicked={onClick} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Signup;
