import {View} from 'native-base';
import React from 'react';
import Eyes from './Eyes';

const BoxMonster = () => {
  return (
    <View style={styles.head}>
      <Eyes />
    </View>
  );
};

const styles = {
  head: {
    width: 150,
    height: 150,
    backgroundColor: 'aqua',
    position: 'relative',
    left: 0,
    top: 0,
  },
};

export default BoxMonster;
