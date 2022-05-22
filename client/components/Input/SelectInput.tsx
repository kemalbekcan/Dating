import React, { FC, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface PropsI {
  field?: any;
  form?: any;
  props?: any;
  label?: string;
}

const SelectInput: FC<PropsI> = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Erkek', value: 'erkek' },
    { label: 'Kadın', value: 'kadın' },
  ]);

  const {
    field: { name },
    form: { errors, touched },
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <View style={styles.button}>
      <View style={styles.labelContainer}>
        <Text style={[styles.labelText, hasError && styles.errorText]}>{props.label} </Text>
      </View>
      <DropDownPicker
        style={[styles.textInput, hasError && styles.errorInput]}
        label="sadas"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        zIndex={-1}
        {...inputProps}
      />

      {hasError && <Text style={styles.errorTextDescriptons}>{errors[name]}</Text>}
    </View>
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
    top: -10,
    left: 28,
  },
  textInput: {
    fontFamily: 'Modernist-Regular',
    height: 67,
    width: '100%',
    marginBottom: 100,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 15,
    paddingLeft: 20,
  },
  errorText: {
    fontSize: 15,
    color: 'red',
  },
  errorTextDescriptons: {
    fontSize: 10,
    color: 'red',
    marginTop: -12,
    marginBottom: 12,
    marginLeft: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default SelectInput;
