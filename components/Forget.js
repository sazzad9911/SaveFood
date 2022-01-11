import React from 'react';
import {Text,View} from 'react-native';
import {Button,TextInput} from 'react-native-paper'
import IconButton from './button/IconButton';
import model from './Styles/model';

const Forget = () => {
    const [Email,setEmail]=React.useState();

    return (
        <View style={model.view}>
        <Text style={model.headerText}>A link will sent to you via email</Text>
        <TextInput style={model.input} placeholder="Email................"
            value={Email} onChangeText={setEmail}
            mode="flat"/>
            <IconButton style={{marginVertical:30}} icon='skip-next' label='Send'/>
        </View>
    );
};

export default Forget;