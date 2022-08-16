import React, {useRef, useState} from 'react';
import {View, Text} from 'native-base';
import {Animated, Dimensions, PanResponder} from 'react-native';
import Eyes from './Eyes';

const BoxMonster = () => {
  const screen = Dimensions.get('screen');
  const [force, setForce] = useState({x: 0, y: 0});
  const FORCE_RATIO_X = screen.width / 50;
  const FORCE_RATIO_Y = screen.height / 50;

  const pan = useRef(
    new Animated.ValueXY({
      x: screen.width / 2 - 75,
      y: screen.height / 2 - 100,
    }),
  ).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
        listener: (event, gestureState) => {
          const {vx, vy} = gestureState;
          console.log('FORCE RATIO', gestureState);
          const x = vx * -1 * FORCE_RATIO_X;
          const y = vy * -1 * FORCE_RATIO_Y;
          setForce({x, y});
        },
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <Animated.View
      style={{
        transform: [{translateX: pan.x}, {translateY: pan.y}],
      }}
      {...panResponder.panHandlers}>
      <View style={styles.head}>
        <Eyes force={force} />
      </View>
      <Text fontSize="sm" variant="bold" style={styles.text}>
        Box Monster
      </Text>
    </Animated.View>
  );
};

const styles = {
  text: {
    width: 150,
    height: 50,
    textAlign: 'center',
  },
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
