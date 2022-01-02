import React from 'react';
import {View,Text,Dimensions,StyleSheet,TouchableOpacity,useColorScheme} from 'react-native'
import {TextInput,Button} from 'react-native-paper'

const SignUp = (props) => {
    const [Name,setName] =React.useState();
    const [Email,setEmail] =React.useState();
    const [Password,setPassword] =React.useState();
    const [Address,setAddress] =React.useState();
    const [Phone,setPhone] =React.useState();
    const [Gender,setGender] =React.useState();
    const navigation= props.navigation;
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
        },
        input1: {
            backgroundColor: isDarkMode ?'#000000' : '#FFFF',
            width:window.width-150
        }
    })
    return (
        <View style={styles.view}>
            <TextInput style={styles.input} placeholder="Name.................."
            value={Name} onChangeText={() =>setName()}
            mode="flat"/>
            <TextInput style={styles.input} placeholder="E-mail................"
            value={Email} onChangeText={() =>setEmail()}
            mode="flat"/>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TextInput style={styles.input} placeholder="Phone................"
            value={Phone} onChangeText={() =>setPhone()}
            mode="flat"/>
            </View>
            <TextInput style={styles.input} placeholder="Address................"
            value={Address} onChangeText={() =>setAddress()}
            mode="flat"/>
            <TextInput style={styles.input} placeholder="Password................"
            value={Password} onChangeText={() =>setPassword()}
            mode="flat" secureTextEntry/>
            <Button style={styles.button} mode="contained">Next</Button>
        </View>
    );
};

export default SignUp;