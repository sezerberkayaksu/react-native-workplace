import {View} from 'native-base';
import React from 'react';

const Eyes = () => {
  return (
    <View style={styles.eyesWrapper}>
      <View style={{...styles.outerEyes, ...styles.left}}>
        <View style={styles.innerEyes} />
      </View>
      <View style={{...styles.outerEyes, ...styles.right}}>
        <View style={styles.innerEyes} />
      </View>
    </View>
  );
};

const styles = {
  eyesWrapper: {
    flexDirection: 'row',
  },
  left: {
    left: 0,
  },
  right: {
    left: '100%',
  },
  outerEyes: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    position: 'relative',
  },
  innerEyes: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 25,
    height: 25,
    borderRadius: 12,
    backgroundColor: 'black',
  },
};
export default Eyes;
