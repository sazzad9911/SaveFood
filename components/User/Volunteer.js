import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import IconButton from './../button/IconButton'
import model from './../Styles/model';

const Volunteer = () => {
    const [Admin, setAdmin] = React.useState(false)
    if (!Admin) {
        return (
            <View style={model.view}>
                <IconButton label="Request for Volunteer" icon='bike-fast' />
            </View>
        );
    } else {
        return (
            <ScrollView>

            </ScrollView>
        )
    }
};

export default Volunteer;