import React from 'react';
import {Dimensions,Text,View,StyleSheet,useColorScheme} from 'react-native';
import {Button,TextInput} from 'react-native-paper'

const Forget = () => {
    const [Email,setEmail]=React.useState();
    const window=Dimensions.get('window');
    const isDarkMode = useColorScheme() === 'dark';
    const styles = StyleSheet.create({
        view: {
            width: window.width,
            height: window.height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isDarkMode ?'#000000' : '#FFFF',
        },
        input: {
            width:window.width-120,
            backgroundColor: isDarkMode ?'#000000' : '#FFFF',
        },
        button: {
            width:150,
            borderRadius:20,
            marginTop:30
        },
        text: {
            fontSize:20,
        }
    })
    return (
        <View style={styles.view}>
        <Text style={styles.text}>A link will sent to you via email</Text>
        <TextInput style={styles.input} placeholder="Email................"
            value={Email} onChangeText={setEmail}
            mode="flat"/>
            <Button mode="contained" style={styles.button}>Send</Button>
        </View>
    );
};

export default Forget;