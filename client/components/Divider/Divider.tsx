import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

interface propI {
  description: string;
}

function Divider({ description }: propI) {
  let [fontsLoaded] = useFonts({
    'Basic-Regular': require('../../assets/fonts/Basic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.divider}>
      <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      <View>
        <Text style={{ fontFamily: 'Basic-Regular', width: 150, textAlign: 'center' }}>
          {description}
        </Text>
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

export default Divider;
