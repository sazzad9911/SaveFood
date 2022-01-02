
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import Cart from './components/cart/Cart';
import Post from './components/Post'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Forget from './components/Forget'
import Home from './components/Home'
import { Provider as PaperProvider,DefaultTheme } from 'react-native-paper';
import Main from './Main';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [background, setBackground] = React.useState();
  React.useEffect(() => {
    if (isDarkMode) {
      setBackground('#000000');

    }
  })
  SplashScreen.hide();
  
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#F39C12',
      accent: '#f1c40f',
      placeholder:'#F39C12',
      surface: '#F39C12',
      text: '#F39C12',
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

