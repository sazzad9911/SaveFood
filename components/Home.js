import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './User/Profile';
import Donate from './User/Donate';
import Contact from './User/Contact'
import UserHome from './User/UserHome'
import Volunteer from './User/Volunteer'
import {TouchableOpacity,StyleSheet,View} from 'react-native'
import firestore from '@react-native-firebase/firestore'


const Home = (props) => {
    const Tab = createBottomTabNavigator();
    const [UserInformation,setUserInformation]= React.useState()
    const params=props.route.params
    React.useEffect(()=>{
        firestore().collection('UserInformation').doc(params.user.uid).onSnapshot(data=>{
            setUserInformation(data.data())
        })
    })

    if(UserInformation){
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
            })} >
                <Tab.Screen name="User Home" component={UserHome} initialParams={{
                    UserInformation:UserInformation
                }} options={({navigation})=>header({navigation})}/>
                <Tab.Screen name="Profile" component={Profile} initialParams={{
                    UserInformation:UserInformation
                }} options={({navigation})=>header({navigation})} />
                <Tab.Screen name="Donate" component={Donate} initialParams={{
                    UserInformation:UserInformation
                }} options={({navigation})=>header({navigation})}/>
                <Tab.Screen name="Volunteer" component={Volunteer} initialParams={{
                    UserInformation:UserInformation
                }} options={({navigation})=>header({navigation})}/>
                <Tab.Screen name="Contact" component={Contact} initialParams={{
                    UserInformation:UserInformation
                }} options={({navigation})=>header({navigation})}/>
            </Tab.Navigator>
        );
    }else{
        return(
            <View></View>
        )
    }
};

export default Home;
const header=({navigation})=>({
    headerLeft: () => (
        <TouchableOpacity style={{marginHorizontal:10}} onPress={() =>{
            navigation.navigate('Rank List')
        }}>
            <Ionicons name="ios-trophy" size={30} color="#F39C12" />
        </TouchableOpacity>
    ),
    headerRight: () => (
        <TouchableOpacity style={{marginHorizontal:10}} onPress={() =>{
            navigation.navigate('Notification')
        }}>
            <Ionicons style={{ marginLeft: 80 }} name="md-notifications" size={30} color="#F39C12" />
        </TouchableOpacity>
    ),
    headerTitleAlign:'center',
})