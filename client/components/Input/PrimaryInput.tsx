import { TextInput, Text } from 'react-native';

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
        style={[hasError]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text>{errors[name]}</Text>}
    </>
  );
}

export default PrimaryButton;
