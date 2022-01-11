import React from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import IconButton from './../button/IconButton'
import model from './../Styles/model';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
    const [Name, setName] = React.useState('Anha Akther Shorno')
    const [EditName, setEditName] = React.useState(false)
    const [Email, setEmail] = React.useState('ahana@gmail.com')
    const [EditEmail, setEditEmail] = React.useState(false)
    const [Phone, setPhone] = React.useState('01761143383')
    const [EditPhone, setEditPhone] = React.useState(false)
    const [Address, setAddress] = React.useState('Ashulia, Saver, Dhaka')
    const [EditAddress, setEditAddress] = React.useState(false)

    return (
        <ScrollView>
            <View style={[model.view2]}>
                <View>
                    <Image style={model.profile} source={require('./../Files/profile.jpeg')} />
                    <Icon style={model.bage} name='camera' size={25} color='white' />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput editable={EditName} style={[model.Input, {
                        fontSize: 18, fontWeight: '800',
                        borderBottomWidth: EditName ? 1 : 0
                    }]}
                        value={Name} onChangeText={(val) => setName(val)} />
                    <Icon style={{ margin: 5 }} name='account-edit-outline' size={25} color='black' onPress={() => {
                        setEditName(!EditName)
                    }} />
                </View>
                
                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Email: </Text>
                        <TextInput editable={EditEmail} style={[model.Input, { borderBottomWidth: EditEmail ? 1 : 0 }]}
                            value={Email} onChangeText={(val) => setEmail(val)} />
                        <Icon style={{ margin: 5 }} name='account-edit-outline' size={25} color='black' onPress={() => {
                            setEditEmail(!EditEmail)
                        }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Phone: </Text>
                        <TextInput editable={EditPhone} style={[model.Input, { borderBottomWidth: EditPhone ? 1 : 0 }]}
                            value={Phone} onChangeText={(val) => setPhone(val)} />
                        <Icon style={{ marginLeft: 5 }} name='account-edit-outline' size={25} color='black' onPress={() => {
                            setEditPhone(!EditPhone)
                        }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Address: </Text>
                        <TextInput editable={EditPhone} style={[model.Input, { borderBottomWidth: EditAddress ? 1 : 0 }]}
                            value={Address} onChangeText={(val) => setAddress(val)} />
                        <Icon style={{ marginLeft: 5 }} name='account-edit-outline' size={25} color='black' onPress={() => {
                            setEditAddress(!EditAddress)
                        }} />
                    </View>
                </View>
                <IconButton label='SAVE' icon='content-save'/>
            </View>
        </ScrollView>
    );
};

export default Profile;