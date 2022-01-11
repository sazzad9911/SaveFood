import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import DropShadow from 'react-native-drop-shadow'
import model from './Styles/model';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconButton from './button/IconButton';

const LogIn = (props) => {
    const [Email, setEmail] = React.useState();
    const [Password, setPassword] = React.useState();
    const navigation = props.navigation;
    const window = Dimensions.get('window');
    return (
        <DropShadow style={model.shadow}>
            <View style={model.view}>
                <TextInput style={model.input} placeholder="E-mail................"
                    value={Email} onChangeText={() => setEmail()}
                    mode="flat" />
                <TextInput style={model.input} placeholder="Password................"
                    value={Password} onChangeText={() => setPassword()}
                    mode="flat" secureTextEntry />

                <IconButton style={{
                    marginVertical:10,
                }} label='Next' icon='skip-next' onPress={() =>navigation.navigate('Home')}/>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('SignUp');
                }}>
                    <Text style={{ fontSize: 22,marginVertical:10 }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Forget');
                }}>
                    <Text style={{ fontSize: 15,marginVertical:5 }}>Forget Password?</Text>
                </TouchableOpacity>
            </View>
        </DropShadow>
    );
};

export default LogIn;
