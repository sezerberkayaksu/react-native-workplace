import {View} from 'native-base';
import React, {useEffect, useState} from 'react';

const AXIS_MAX = 40;
const AXIS_MIN = 0;

const Eyes = ({force}) => {
  const [eyePoisitons, setEyePoisitons] = useState({x: 15, y: 15});

  useEffect(() => {
    console.log('FORCE', force);
    const newX =
      eyePoisitons.x + force.x > AXIS_MAX || eyePoisitons.x + force.x < AXIS_MIN
        ? eyePoisitons.x
        : eyePoisitons.x + force.x;
    const newY =
      eyePoisitons.y + force.y > AXIS_MAX || eyePoisitons.y + force.y < AXIS_MIN
        ? eyePoisitons.y
        : eyePoisitons.y + force.y;
    setEyePoisitons({x: newX, y: newY});
  }, [force]);

  return (
    <View style={styles.eyesWrapper}>
      <View style={{...styles.outerEyes, ...styles.left}}>
        <View
          style={{
            ...styles.innerEyes,
            left: eyePoisitons.x,
            top: eyePoisitons.y,
          }}
        />
      </View>
      <View style={{...styles.outerEyes, ...styles.right}}>
        <View
          style={{
            ...styles.innerEyes,
            left: eyePoisitons.x,
            top: eyePoisitons.y,
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  eyesWrapper: {
    flexDirection: 'row',
  },
  left: {
    left: 15,
  },
  right: {
    left: 35,
  },
  outerEyes: {
    top: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    position: 'relative',
  },
  innerEyes: {
    transition: '.5s',
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 12,
    backgroundColor: 'black',
  },
};
export default Eyes;
