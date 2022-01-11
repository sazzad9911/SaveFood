import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import IconButton from './../button/IconButton'
import model from './../Styles/model';
import VolunteerCart from './../cart/VolunteerCart'

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
                <VolunteerCart navigation={props.navigation}/>
                <VolunteerCart navigation={props.navigation}/>
                <VolunteerCart navigation={props.navigation}/>
            </ScrollView>
        )
    }
};

export default Volunteer;