import React, { FC } from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addRoute } from '../../store/routeAction';

interface props {
  title: string;
}

const IconButton: FC<props> = ({ title }: props) => {
  const dispatch = useDispatch();
  function onClick() {
    dispatch(addRoute('email'));
  }
  return (
    <TouchableHighlight style={styles.emailButton} onPress={onClick}>
      <View style={styles.iconButton}>
        <MaterialIcons name="email" size={24} color="white" style={{ marginRight: 20 }} />
        <Text style={{ color: '#ffffff', fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  emailButton: {
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
  iconButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '25%',
  },
});

export default IconButton;
