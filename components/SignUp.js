import React from 'react';
import { View, Text, } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import DropShadow from 'react-native-drop-shadow'
import model from './Styles/model';
import IconButton from './button/IconButton';

const SignUp = (props) => {
    const [Name, setName] = React.useState();
    const [Email, setEmail] = React.useState();
    const [Password, setPassword] = React.useState();
    const [Address, setAddress] = React.useState();
    const [Phone, setPhone] = React.useState();
    const [Gender, setGender] = React.useState();
    const navigation = props.navigation;


    return (
        <DropShadow style={model.shadow}>
            <View style={model.view}>
                <TextInput style={model.input} placeholder="Name.................."
                    value={Name} onChangeText={() => setName()}
                    mode="flat" />
                <TextInput style={model.input} placeholder="E-mail................"
                    value={Email} onChangeText={() => setEmail()}
                    mode="flat" />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={model.input} placeholder="Phone................"
                        value={Phone} onChangeText={() => setPhone()}
                        mode="flat" />
                </View>
                <TextInput style={model.input} placeholder="Address................"
                    value={Address} onChangeText={() => setAddress()}
                    mode="flat" />
                <TextInput style={model.input} placeholder="Password................"
                    value={Password} onChangeText={() => setPassword()}
                    mode="flat" secureTextEntry />
                <IconButton label='Next' icon='skip-next'/>
            </View>
        </DropShadow>
    );
};

export default SignUp;