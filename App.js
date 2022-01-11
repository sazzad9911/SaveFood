import React from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider as PaperProvider,DefaultTheme } from 'react-native-paper';
import Main from './Main';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: Non-serializable values were found in the navigation state. Check:'])

const App = () => {
  
  SplashScreen.hide();
  
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      placeholder:'#DC7633',
      notification:'#DC7633',
      text: '#000',
      primary:'#DC7633',
    },
    mode:'exact'
  };
  return (
    <PaperProvider theme={theme}>
      <Main/>
    </PaperProvider>
  )
}

export default App;

