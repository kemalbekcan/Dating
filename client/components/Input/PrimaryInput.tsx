import { StyleSheet, TextInput, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

function PrimaryButton(props: any) {
  let [fontsLoaded] = useFonts({
    'Modernist-Regular': require('../../assets/fonts/Sk-Modernist-Regular.otf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <>
      <View style={styles.button}>
        <View style={styles.labelContainer}>
          <Text style={{ color: 'rgba(0,0,0,0.4)', fontFamily: 'Modernist-Regular' }}>Adress</Text>
        </View>
        <TextInput
          style={[styles.textInput, hasError && styles.errorInput]}
          value={value}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />
        {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  labelContainer: {
    backgroundColor: 'white', // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'absolute', // Needed to be able to precisely overlap label with border
    top: 0, // Vertical position of label. Eyeball it to see where label intersects border.
    left: 28,
  },
  textInput: {
    fontFamily: 'Modernist-Regular',
    height: 67,
    width: '90%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 15,
    paddingLeft: 20,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default PrimaryButton;
