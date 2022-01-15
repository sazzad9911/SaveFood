import React from 'react';

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Main from './Main';
import { LogBox, Text } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import model from './components/Styles/model';
LogBox.ignoreAllLogs()
import auth from '@react-native-firebase/auth'
import SplashScreen from 'react-native-splash-screen'
import MainHome from './MainHome';

const App = () => {
  const [User, setUser] = React.useState(null)
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      placeholder: '#DC7633',
      notification: '#DC7633',
      text: '#000',
      primary: '#DC7633',
    },
    mode: 'exact'
  };
  SplashScreen.hide();
  auth().onAuthStateChanged((user) => {

    setUser(user);
    //console.log(user);
    //navigation.navigate('Home', { id: user.id,email: user.email});
  })
  
  return (
    <PaperProvider theme={theme}>
      {
        User && User.uid ? (
          <MainHome user={User} />
        ) : (
          <Main user={User} />
        )
      }
    </PaperProvider>
  )
}

export default App;

