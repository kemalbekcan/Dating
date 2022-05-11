import { StyleSheet, TouchableHighlight, Text } from 'react-native';

function PrimaryButton({ title, clicked, validation }: any) {
  return (
    <TouchableHighlight style={styles.button} disabled={validation} onPress={clicked}>
      <Text style={{ color: '#ffffff', fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
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
});

export default PrimaryButton;
