import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import Cart from './../cart/Cart'
import model from './../Styles/model';

const UserHome = () => {
    return (
        <ScrollView>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </View>
        </ScrollView>
    );
};

export default UserHome;