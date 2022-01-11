import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import Color from './Styles/Color'
import Cart from './cart/Cart';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'

const Post = (props) => {
    const window = Dimensions.get('window');
    const navigation =props.navigation;
    const DATA = [
        {
            name: 'Sazzad Hossain',
            address: 'Ashulia, Saver, Dhaka',
            id: 1
        },
        {
            name: 'Sayid Hasan',
            address: 'Ashulia, Saver, Dhaka',
            id: 2
        },
        {
            name: 'Nahiduzzaman',
            address: 'Ashulia, Saver, Dhaka',
            id: 3
        },
        {
            name: 'Akash',
            address: 'Ashulia, Saver, Dhaka',
            id: 4
        }
    ]
    const styles = StyleSheet.create({
        view: {
            marginTop: 0,
            marginBottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: window.width,
            height: window.height

        },
        fab: {
            position: 'absolute',
            margin: 16,
            right: 10,
            bottom: 10,
            width: 140,
            height: 40,
            backgroundColor:'#F39C12',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF',

        }
    })
    const renderItem = ({ item }) => (
        <Cart name={item.name} address={item.address} />
    );

    return (
        <SafeAreaView style={styles.view}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <FAB style={styles.fab} icon={()=>(
            <Icon name="login" color='#ffff' size={20}/>)} label='Log In' onPress={()=>{
                navigation.navigate('LogIn');
            }}/>
        </SafeAreaView>
    );
};

export default Post;
