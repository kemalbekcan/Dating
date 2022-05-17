import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { useFonts } from 'expo-font';

interface PropsI {
  title?: string;
  clicked?: any;
  validation?: any;
  type?: any;
  customCss?: any;
}

const PrimaryButton: React.FC<PropsI> = ({ title, clicked, validation, type, customCss }) => {
  let [fontsLoaded] = useFonts({
    'Modernist-Bold': require('../../assets/fonts/Sk-Modernist-Bold.otf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  function typeButton() {
    if (type === 'Primary') {
      return (
        <>
          <TouchableHighlight
            style={[styles.primaryButton, customCss && customCss]}
            disabled={validation}
            onPress={() => clicked()}>
            <View>
              <Text
                style={{
                  fontFamily: 'Modernist-Bold',
                  fontSize: 16,
                  color: '#ffffff',
                  fontWeight: 'bold',
                }}>
                {title}
              </Text>
            </View>
          </TouchableHighlight>
        </>
      );
    } else if (type === 'Secondary') {
      return (
        <Link to="/login" style={styles.secondaryButton}>
          <TouchableHighlight onPress={() => clicked()}>
            <Text
              style={{
                fontFamily: 'Modernist-Bold',
                fontSize: 16,
                color: '#000000',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {title}
            </Text>
          </TouchableHighlight>
        </Link>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableHighlight onPress={() => clicked()} underlayColor={'red'}>
            <View style={styles.button}>
              <Text>{title}</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }
  return <>{type && typeButton()}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  primaryButton: {
    backgroundColor: '#EF0A6A',
    height: 58,
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EF0A6A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    height: 58,
    width: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default PrimaryButton;
