import React, { FC } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

interface PropsI {
  field?: any;
  form?: any;
  props?: any;
  label?: string;
}

const PrimaryInput: FC<PropsI> = (props) => {
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
          <Text style={[styles.labelText, hasError && styles.errorText]}>{props.label} </Text>
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
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  labelText: {
    color: 'rgba(0,0,0,0.4)',
    fontFamily: 'Modernist-Regular',
  },
  labelContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 3,
    marginStart: 10,
    zIndex: 1,
    elevation: 1,
    shadowColor: 'white',
    position: 'absolute',
    top: 0,
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

export default PrimaryInput;
