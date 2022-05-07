import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

function App({ tasks }: any) {
  return (
    <LinearGradient
      colors={['rgba(239, 10, 106, 1)', 'rgba(182, 53, 156, 1)']}
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Image source={require('./assets/logo.png')} />
        <View style={styles.header}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: '700' }}>
            Hoş Geldin {tasks}
          </Text>
          <Text
            style={{
              color: 'white',
              marginTop: 5,
              marginBottom: 20,
              fontSize: 20,
              fontWeight: '700',
            }}>
            Biz de seni bekliyorduk.
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
        <View style={styles.privacyPolicy}>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>
            Kaydolarak, Genel Kullanım Koşullarımızı ve
          </Text>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>
            Gizlilik Politikamızı kabul etmiş olursunuz.
          </Text>
        </View>
        <View style={styles.forgotPassword}>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: '700' }}>
            Şifreni mi unuttun ?
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
  privacyPolicy: {
    marginTop: 20,
  },
  forgotPassword: {
    marginTop: 105,
  },
});

export default App;
