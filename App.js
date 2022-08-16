import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import BoxMonster from './components/BoxMonster';

const App = () => {
  /*const nativeColorScheme = useColorScheme();
  const {toggleColorMode} = useColorMode();
  const nativeBaseColorMode = useColorModeValue('light', 'dark');*/

  return (
    <NativeBaseProvider theme={theme}>
      <BoxMonster />
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

export default App;
