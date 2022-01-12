import React from 'react';
import {View,Text,ScrollView} from 'react-native'
import RankCart from '../cart/RankCart';
import firestore from '@react-native-firebase/firestore'
const RankList = () => {
    const [Users,setUsers]=React.useState(null)
    React.useState(() => {
        firestore().collection('UserInformation').get().then(users => {
            let arr=[];
            users.forEach(user =>{
                arr.push(user.data())
            })
            setUsers(arr)
        })
    })
    return (
        <ScrollView>
            {
                Users && Users.length>0? (
                    Users.map(user =>(
                        <RankCart key={user.Id} data={user}/>
                    ))
                ):(
                    <Text style={{margin:10}}>Empty</Text>
                )
            }
        </ScrollView>
    );
};

export default RankList;