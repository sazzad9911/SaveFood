import React from 'react';
import { View, Text, useColorScheme, StyleSheet, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './User/Profile';
import Donate from './User/Donate';
import Contact from './User/Contact'
import UserHome from './User/UserHome'
import Volunteer from './User/Volunteer'


const Home = (props) => {
    const Tab = createBottomTabNavigator();
    const [TabColor, setTabColor] = React.useState('#ffff');
    const isDarkMode = useColorScheme() === 'dark';

    React.useEffect(() => {
        if (isDarkMode) {
            setTabColor('#000000')
        }
    })
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'User Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';

                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                } else if (route.name === 'Donate') {
                    iconName = focused ? 'pizza' : 'pizza-outline';
                } else if (route.name === 'Volunteer') {
                    iconName = focused ? 'walk-outline' : 'walk-sharp';
                } else if (route.name === 'Contact') {
                    iconName = focused ? 'ios-call' : 'ios-call-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#F39C12',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: TabColor,
            }
        })}>
            <Tab.Screen name="User Home" component={UserHome} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Tab.Screen name="Donate" component={Donate} options={{ headerShown: false }} />
            <Tab.Screen name="Volunteer" component={Volunteer} options={{ headerShown: false }} />
            <Tab.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default Home;