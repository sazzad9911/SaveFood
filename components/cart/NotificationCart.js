import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Avatar } from 'react-native-paper'
import SmallButton from './../button/SmallButton'
import DropShadow from 'react-native-drop-shadow'
import model from './../Styles/model';

const NotificationCart = () => {
    const [Admin, setAdmin] = React.useState(false)
    return (
        <DropShadow style={model.shadow}>
            <View style={model.cartView}>
                <Avatar.Image style={{
                    margin: 5,
                }} size={60} source={require('./../Files/profile.jpeg')} />
                <View style={{
                    flex: 3,
                    justifyContent: 'center',
                    padding: 5
                }}>
                    <Text style={{ fontWeight: 'bold' }}>Mithila</Text>
                    <Text>Your donation request is Accept by Mithila</Text>
                    {
                    Admin ? (
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <SmallButton name='Accept' color='green' onPress={() => Alert.alert('ok')} />
                            <SmallButton name='Reject' color='red' onPress={() => Alert.alert('ok')} />
                        </View>
                    ):(
                        <View></View>
                    )
                }
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text>7:33 AM</Text>
                    <Text>18 Jul 2014</Text>
                </View>
                
            </View>
        </DropShadow>
    );
};

export default NotificationCart;