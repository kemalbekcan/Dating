import { SafeAreaView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
function Loading() {
  return (
    <LinearGradient
      colors={['rgba(239, 10, 106, 1)', 'rgba(182, 53, 156, 1)']}
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <ActivityIndicator size="large" color="#ffffff" />
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

export default Loading;
