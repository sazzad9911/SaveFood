import React from 'react';
import {View,Text,Dimensions,StyleSheet,TouchableOpacity,useColorScheme} from 'react-native'
import {TextInput,Button} from 'react-native-paper'

const LogIn = (props) => {
    const [Email,setEmail] =React.useState();
    const [Password,setPassword] =React.useState();
    const navigation = props.navigation;
    const window=Dimensions.get('window');
    const isDarkMode = useColorScheme() === 'dark';
    
    const styles = StyleSheet.create({
        view: {
            backgroundColor: isDarkMode ?'#000000' : '#FFFF',
            width:window.width,
            height:window.height,
            justifyContent: 'center',
            alignItems: 'center'
        },
        input: {
            backgroundColor: isDarkMode ?'#000000' : '#FFFF',
            width:window.width-120
        },
        button: {
            marginTop:20,
            borderRadius: 20,
            padding:1,
            width:110,
        },
        button1: {
            marginTop:20,
            borderBottomWidth:1,
        },
        button2: {
            marginTop:30,
        }
    })
    return (
        <View style={styles.view}>
            <TextInput style={styles.input} placeholder="E-mail................"
            value={Email} onChangeText={() =>setEmail()}
            mode="flat"/>
            <TextInput style={styles.input} placeholder="Password................"
            value={Password} onChangeText={() =>setPassword()}
            mode="flat" secureTextEntry/>
            <Button style={styles.button} mode="contained" onPress={() =>{
                navigation.navigate('Home')
            }}>Log In</Button>
            <TouchableOpacity style={styles.button1} onPress={() =>{
                navigation.navigate('SignUp');
            }}>
                <Text style={{fontSize:22}}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() =>{
                navigation.navigate('Forget');
            }}>
                <Text style={{fontSize:15}}>Forget Password?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LogIn;
