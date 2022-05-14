import { StyleSheet, TextInput, Text } from 'react-native';

function PrimaryButton(props: any) {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '90%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
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
