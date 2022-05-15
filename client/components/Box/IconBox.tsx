import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

interface propI {
  brand: string;
}

function IconBox({ brand }: propI) {
  function renderBrandBox() {
    if (brand == 'facebook') {
      return (
        <View style={styles.box}>
          <Entypo name="facebook" size={28} color="black" />
        </View>
      );
    } else if (brand == 'google') {
      return (
        <View style={styles.box}>
          <AntDesign name="google" size={28} color="black" />
        </View>
      );
    } else if (brand == 'apple') {
      return (
        <View style={styles.box}>
          <AntDesign name="apple1" size={28} color="black" />
        </View>
      );
    }
  }
  return <>{brand && renderBrandBox()}</>;
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 15,
    width: 64,
    height: 64,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconBox;
