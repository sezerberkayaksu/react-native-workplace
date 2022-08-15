import React, {useRef} from 'react';
import {NativeBaseProvider, Text, extendTheme} from 'native-base';
import {Animated, Dimensions, PanResponder} from 'react-native';
import BoxMonster from './components/BoxMonster';

const App = () => {
  /*const nativeColorScheme = useColorScheme();
  const {toggleColorMode} = useColorMode();
  const nativeBaseColorMode = useColorModeValue('light', 'dark');*/

  const screen = Dimensions.get('screen');
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
        listener: (event, gestureState) => {},
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <NativeBaseProvider theme={theme}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <BoxMonster />
        <Text fontSize="sm" variant="bold" style={styles.text}>
          Box Monster
        </Text>
      </Animated.View>
    </NativeBaseProvider>
  );
};

const theme = extendTheme({
  components: {
    Text: {
      variants: {
        bold: ({colorScheme}) => {
          return {
            fontWeight: 'bold',
          };
        },
      },
      // Can pass also function, giving you access theming tools
      baseStyle: ({colorMode}) => {
        return {
          fontWeight: 'normal',
        };
      },
    },
  },
});

const styles = {
  text: {
    width: 150,
    height: 50,
    textAlign: 'center',
  },
};

export default App;
