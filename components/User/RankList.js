import React from 'react';
import {View,Text,ScrollView} from 'react-native'
import RankCart from '../cart/RankCart';
import firestore from '@react-native-firebase/firestore'
const RankList = () => {
    const [Users,setUsers]=React.useState(null)
    firestore().collection('UserInformation').onSnapshot(data=>{
        if(data){
            let arr = []
            data.forEach(doc=>{
                arr.push(doc.data())
            })
            setUsers(arr)
        }else{
            setUsers([])
        }
    })
    return (
        <ScrollView>
            {
                Users? (
                    Users.length > 0 ? (
                        Users.map(user =>(
                        <RankCart key={user.Id} data={user}/>
                    ))
                    ):(
                        <Text style={{margin:10, textAlign: 'center' }}>Empty</Text>
                    )
                ):(
                    <Text style={{margin:10, textAlign: 'center' }}>Loading...</Text>
                )
            }
        </ScrollView>
    );
};

export default RankList;