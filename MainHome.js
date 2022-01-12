import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, DefaultTheme, useNavigation } from '@react-navigation/native';
import Cart from './components/cart/Cart';
import Post from './components/Post'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Forget from './components/Forget'
import Home from './components/Home'
import AnimatedLoader from 'react-native-animated-loader'
import RankList from './components/User/RankList'
import Notification from './components/User/Notification'
import { Avatar } from 'react-native-paper'

const MainHome = (props) => {
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} initialParams={{user:props.user}} options={{ headerShown: false }}/>
                <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
                <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }} />
                <Stack.Screen name="Rank List" component={RankList}/>
                <Stack.Screen name="Notification" component={Notification}/>
                <Stack.Screen name="User Profile" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainHome;

const Profile = (props) => {
    const data = props.route.params;
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Avatar.Image style={{
                margin: 5,
            }} size={130} source={require('./components/Files/profile.jpeg')} />
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                margin: 5,
                marginBottom: 15
            }}>{data.Name}</Text>
            <View>
                <Text>{data.Phone}</Text>
                <Text>{data.Email}</Text>
                <Text>{data.Address}</Text>
            </View>
        </View>
    )
}