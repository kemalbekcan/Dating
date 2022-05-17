import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

interface PropsI {
  clicked?: any;
  title?: string;
  color?: string;
  coloredText?: string;
  customCss: any;
}

const BasicButton: FC<PropsI> = ({ clicked, title, color, coloredText, customCss }) => {
  let [fontsLoaded] = useFonts({
    'Basic-Regular': require('../../assets/fonts/Basic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <TouchableOpacity onPress={() => clicked()}>
      <View>
        <Text style={customCss}>
          <Text style={styles.blackText}>{title}</Text>{' '}
          <Text style={styles.colorText}>{coloredText}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  blackText: {
    color: 'color: rgba(0, 0, 0, 0.7)',
  },
  colorText: {
    color: '#EF0A6A',
  },
});

export default BasicButton;
