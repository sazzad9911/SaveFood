
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

