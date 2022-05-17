import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import i18n from '../../locales';
import { useFonts } from 'expo-font';

function RadioButton() {
  const [rememberMe, setRememberMe] = useState(false);
  function changeRememberStatus() {
    if (rememberMe) {
      setRememberMe(false);
    } else {
      setRememberMe(true);
    }
  }

  let [fontsLoaded] = useFonts({
    'Basic-Regular': require('../../assets/fonts/Basic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableOpacity style={styles.radioButton} onPress={changeRememberStatus}>
      <View style={styles.radioButtonCircle}>
        {rememberMe == true ? <View style={styles.radioButtonDot} /> : null}
      </View>
      <View style={styles.radioButtonTextArea}>
        <Text style={styles.radioButtonText}>{i18n.t('components.Remember Me')}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  radioButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  radioButtonCircle: {
    marginTop: 14,
    height: 15,
    width: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EF0A6A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonDot: {
    height: 7,
    width: 7,
    borderRadius: 6,
    backgroundColor: '#EF0A6A',
  },
  radioButtonTextArea: {
    marginTop: 14,
    marginLeft: 7,
  },
  radioButtonText: {
    fontFamily: 'Basic-Regular',
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 14,
  },
});

export default RadioButton;
