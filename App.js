import React from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider as PaperProvider,DefaultTheme } from 'react-native-paper';
import Main from './Main';
import { LogBox,Text } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import model from './components/Styles/model';
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
      <AnimatedLoader
        visible={false}
        overlayColor="rgba(0, 0, 0, 0.452)"
        source={require("./components/Files/88967-food-delivery-service.json")}
        animationStyle={model.loader}
        speed={1}
      >
        <Text style={{color: "white"}}>Loading...</Text>
      </AnimatedLoader>
    </PaperProvider>
  )
}

export default App;

