import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import Cart from './../cart/Cart'
import model from './../Styles/model';
import firestore from '@react-native-firebase/firestore'
import AnimatedLoader from 'react-native-animated-loader'

const UserHome = (props) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const database = firestore().collection('Post').onSnapshot(data => {
            if (data) {
                let arr = [];
                data.forEach = (doc) => {
                    arr.push(doc.data());
                }
                setData(arr);
            } else {
                setData([]);
            }
        },
            error => {
                Alert.alert('Error', error.message)
            })
        return database;
    })

    return (
        <ScrollView>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {
                    data ? (
                        data.length > 0 ? (
                            <Cart key={data.PostId} data={data} />
                        ) : (
                            <Text style={{marginTop:100}}>No Data Available</Text>
                        )
                    ) : (
                        <AnimatedLoader
                            visible={true}
                            overlayColor="rgba(255, 255, 255, 0.459)"
                            source={require("./../Files/88967-food-delivery-service.json")}
                            animationStyle={model.loader}
                            speed={1}
                        >
                            <Text style={{ color: "black" }}>Loading...</Text>
                        </AnimatedLoader>
                    )
                }
            </View>
        </ScrollView>
    );
};

export default UserHome;