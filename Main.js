import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DefaultTheme,useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import Cart from './components/cart/Cart';
import Post from './components/Post'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Forget from './components/Forget'
import Home from './components/Home'
import { Provider as PaperProvider, Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropShadow from 'react-native-drop-shadow'
import RankList from './components/User/RankList'
import Notification from './components/User/Notification'
const Main = () => {
    const Stack = createNativeStackNavigator();
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [background, setBackground] = React.useState('#ffff');
    const [tinColor,setTinColor] = React.useState('#000');
    const [bg,setBg]=React.useState('#ffff');
    const [title,setTitle]=React.useState('Save Food')
    React.useEffect(() => {
        if (isDarkMode) {
            setBackground('#000000');
            setTinColor('#ffff');
            setBg('rgba(250, 246, 246, 0.219)')

        }
    })
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
                <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={({navigation})=>({
                    headerLeft: () => (
                        <TouchableOpacity style={styles.view2} onPress={() =>{
                            navigation.navigate('Rank List')
                        }}>
                            <Ionicons name="ios-trophy" size={30} color="#F39C12" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={styles.view2} onPress={() =>{
                            navigation.navigate('Notification')
                        }}>
                            <Ionicons style={{ marginLeft: 80 }} name="md-notifications" size={30} color="#F39C12" />
                        </TouchableOpacity>
                    ),
                    title:title,
                    headerTitleAlign:'center',
                })}/>
                <Stack.Screen name="Rank List" component={RankList} />
                <Stack.Screen name="Notification" component={Notification}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Main;
const styles = StyleSheet.create({
    view: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'red',
        shadowOffset: {
            width: 3,
            height: 2
        },
        shadowColor: '#0000',
        shadowRadius: 3,
        shadowOpacity: .5

    },
    view2: {

    }
})