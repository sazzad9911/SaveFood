import React from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native';
import { Avatar } from 'react-native-paper'
import DropShadow from 'react-native-drop-shadow'
import model from '../Styles/model';
import SmallButton from '../button/SmallButton';
const VolunteerCart = (props) => {
    const [visible, setVisible] = React.useState(false)
    const [data,setData] = React.useState({Name:'Mithila',
    Phone:'083626334',Email:'Mithila@gmail.com',Address:'Kurigram,Dslsie,ksdd'})
    return (
        <DropShadow style={model.shadow}>
            <View style={model.cartView}>
                <TouchableOpacity onPress={() => props.navigation.navigate('User Profile',data)}>
                <Avatar.Image style={{
                    margin: 5,
                }} size={60} source={require('./../Files/profile.jpeg')} />
                </TouchableOpacity>
                <View style={{
                    justifyContent: 'center',
                    flex: 3,
                }}>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>Mithila</Text>
                    <Text>Want to send a packet from Address at Time</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <SmallButton name='Accept' color='green' onPress={() => { Alert.alert('1', 'ok') }} />
                        <SmallButton name='Reject' color='red' onPress={() => { Alert.alert('1', 'ok') }} />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>3:00 Am</Text>
                    <Text>12 Jul 2014</Text>
                </View>
            </View>
        </DropShadow>
    );
};

export default VolunteerCart;
