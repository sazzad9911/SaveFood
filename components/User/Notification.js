import React from 'react';
import {View,Text,ScrollView} from 'react-native'
import NotificationCart from './../cart/NotificationCart'
import firestore from '@react-native-firebase/firestore'


const Notification = (props) => {
    const [data,setData]= React.useState(null)
    const params = props.route.params;
    firestore().collection('Notification').orderBy('NewDate', 'desc').get().then((document) => {
        if(document){
            let arr=[]
            document.forEach(user=> {
                arr.push(user.data())
            })
            return setData(arr)
        }else{
            return setData([])
        }
    })
    
    return (
        <ScrollView>
            {
                data?(
                    data.length> 0 ? (
                        data.map((d,i)=> (
                            d.Uid ===params.uid?(
                                <NotificationCart key={i} data={d}/>
                            ):(
                                <View></View>
                            )
                        ))
                    ):(
                        <Text style={{margin:10,textAlign: 'center'}}>Empty data</Text>
                    )
                ):(
                    <Text style={{margin:10,textAlign: 'center'}}>Loading.....</Text>
                )
            }
        </ScrollView>
    );
};

export default Notification;