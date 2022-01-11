import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import Cart from './../cart/Cart'
import model from './../Styles/model';

const UserHome = () => {
    const [data,setData] =React.useState([
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
    ])
    return (
        <ScrollView>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {
                    data.map((data)=>(
                        <Cart key={data.id} name={data.name} address={data.address}/>
                    ))
                }
            </View>
        </ScrollView>
    );
};

export default UserHome;