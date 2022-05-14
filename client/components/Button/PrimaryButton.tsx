import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import { Link } from 'react-router-native';

function PrimaryButton({ title, clicked, validation, type }: any) {
  function typeButton() {
    if (type === 'Primary') {
      return (
        <>
          <Link to="/login" style={styles.primaryButton}>
            <TouchableHighlight onPress={() => clicked()}>
              <View>
                <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{title}</Text>
              </View>
            </TouchableHighlight>
          </Link>
        </>
      );
    } else if (type === 'Secondary') {
      return (
        <Link to="/login" style={styles.secondaryButton}>
          <TouchableHighlight onPress={() => clicked()}>
            <Text style={{ color: '#000000', fontWeight: 'bold', textAlign: 'center' }}>
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
}

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
    height: 56,
    width: '78%',
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
    height: 56,
    width: '78%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PrimaryButton;
