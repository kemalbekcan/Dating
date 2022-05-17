import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
function RadioButton() {
  const [rememberMe, setRememberMe] = useState(false);
  function changeRememberStatus() {
    if (rememberMe) {
      setRememberMe(false);
    } else {
      setRememberMe(true);
    }
  }
  return (
    <TouchableOpacity onPress={changeRememberStatus}>
      <View
        style={{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {rememberMe == true ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#000',
            }}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

export default RadioButton;
