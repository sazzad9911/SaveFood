import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native'
import { TextInput } from 'react-native-paper';
import IconButton from './../button/IconButton'
import model from './../Styles/model';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
    return (
        <ScrollView>
            <View style={[model.view2]}>
                <View>
                    <Image style={model.profile} source={require('./../Files/profile.jpeg')}/>
                    <Icon style={model.bage} name='camera' size={25} color='white'/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Profile;