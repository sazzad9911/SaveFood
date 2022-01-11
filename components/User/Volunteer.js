import React from 'react';
import { View, Text, ScrollView ,TouchableOpacity} from 'react-native';
import model from './../Styles/model';
import VolunteerCart from './../cart/VolunteerCart'
import Icon from 'react-native-vector-icons/AntDesign';
import DropShadow from 'react-native-drop-shadow'
const Volunteer = (props) => {
    const [Admin, setAdmin] = React.useState(true)
    if (!Admin) {
        return (
            <View style={model.view}>
                <IconButton label="Request for Volunteer" icon='bike-fast' />
            </View>
        );
    } else {
        return (
            <ScrollView>
                <AddPost />
                <VolunteerCart navigation={props.navigation} />
                <VolunteerCart navigation={props.navigation} />
                <VolunteerCart navigation={props.navigation} />
                <VolunteerCart navigation={props.navigation} />
                <VolunteerCart navigation={props.navigation} />
                <VolunteerCart navigation={props.navigation} />
                <VolunteerCart navigation={props.navigation} />
                <VolunteerCart navigation={props.navigation} />
                <VolunteerCart navigation={props.navigation} />
            </ScrollView>
        )
    }
};

export default Volunteer;
const AddPost = () => {
    return (
        <DropShadow style={model.shadow}>
            <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 5,
                margin: 5,
                flexDirection: 'row',
            }}>
                <Icon style={{
                    marginHorizontal: 10
                }} name="camera" size={25} color="#000" />
                <Text>Add Post</Text>
            </TouchableOpacity>
        </DropShadow>
    )
}