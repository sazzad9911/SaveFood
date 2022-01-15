import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import Post from './components/Post'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Forget from './components/Forget'
import Home from './components/Home'
import RankList from './components/User/RankList'
import Notification from './components/User/Notification'

const Main = (props) => {
    const Stack = createNativeStackNavigator();;
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
                <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Rank List" component={RankList} />
                <Stack.Screen name="Notification" component={Notification} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Main;
