import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper';
import model from './../Styles/model';
import IconButton from './../button/IconButton'

const Donate = () => {
    const [Address, setAddress] = React.useState()
    const [Time, setTime] = React.useState()
    const [Item, setItem] = React.useState()
    return (
        <View style={{
            width: '100%', height: '100%', justifyContent: 'center',
            alignItems: 'center', backgroundColor: '#FFFF'
        }}>
            <TextInput style={model.input} placeholder="Picking Address...." label="Address"
                value={Address} onChangeText={(val) => setAddress(val)} />
            <TextInput style={model.input} placeholder="Picking Time & Date...." label="Time & Date"
                value={Time} onChangeText={(val) => setTime(val)} />
            <TextInput style={model.input} placeholder="Picking Items...." label="Items"
                value={Item} onChangeText={(val) => setItem(val)} />

                <IconButton style={{marginVertical:30}} label='Picking Request' icon='send'/>
        </View>
    );
};

export default Donate;