import React from 'react';
import {View,Text,ScrollView} from 'react-native'
import RankCart from '../cart/RankCart';
const RankList = () => {
    return (
        <ScrollView>
            <RankCart/>
            <RankCart/>
            <RankCart/>
            <RankCart/>
        </ScrollView>
    );
};

export default RankList;