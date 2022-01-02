import React from 'react';
import { View, Text, Image, StyleSheet,useColorScheme,Dimensions } from 'react-native';
import DropShadow from "react-native-drop-shadow";
import {Colors} from 'react-native/Libraries/NewAppScreen';
const Cart = (props) => {
    const [Name, setName] = React.useState(props.name);
    const [Address, setAddress] = React.useState(props.address);
    const [date, setDate] = React.useState(new Date(Date.now()));
    const [Month, setMonth] = React.useState("");
    const [DonateBy, setDonateBy] = React.useState('Sagor Alamat');

    const isDarkMode = useColorScheme() === 'dark';
    const window=Dimensions.get('window');

    const backgroundStyle = {
        backgroundColor: !isDarkMode ? Colors.darker : Colors.lighter,
    };

    React.useState(() => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var dates = date.getDate();
        var m = date.getMonth();
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        setMonth(dates + " " + months[m]);
        if (hours > 12) {
            hours = hours - 12;
            setDate(hours + ":" + minutes + " " + "PM");
        } else {
            setDate(hours + ":" + minutes + " " + "AM");
        }
    })
    const styles = StyleSheet.create({
        container:{
            backgroundColor: 'rgba(129, 129, 129, 0.295)',
            width:window.width-25,
            borderRadius:10
        },
        header: {
            flexDirection: 'row',
            borderRadius: 20,
    
        },
        profile: {
            width: 50,
            height: 50,
            borderRadius: 25,
            margin: 10,
        },
        box1: {
            flex: 2,
            justifyContent: 'center'
        },
        box2: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headText: {
            fontWeight: 'bold',
            fontSize:17,
        },
        text: {
            fontSize:15
        },
        image: {
            width:window.width-30,
            marginLeft:2.5,
            height:window.width/2,
            borderRadius:10
        }
    
    })
    return (
        <DropShadow style={{
            shadowColor: '#00000',
            shadowOffset: {
                width: 1,
                height: 1
            },
            shadowRadius: 3,
            shadowOpacity: 4,
            borderRadius: 25,
            margin: 13,
        }}>
            <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profile}
                    source={{ uri: 'https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg' }}
                />
                <View style={styles.box1}>
                    <Text style={styles.headText}>{Name}</Text>
                    <Text style={styles.text}>{Address}</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.text}>{date}</Text>
                    <Text style={styles.text}>{Month}</Text>
                </View>
            </View>
            <View>
                <Image style={styles.image} source={{ uri: 'https://i.pinimg.com/originals/76/b5/90/76b5906477b699692126dea8ed19d4ac.jpg'}}/>
            </View>
            <View style={styles.header}>
                <Image
                    style={styles.profile}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU' }}
                />
                <View style={styles.box1}>
                    <Text style={styles.headText}>Donate By</Text>
                    <Text style={styles.text}>{DonateBy}</Text>
                </View>
            </View>
            </View>
        </DropShadow>
    );
};

export default Cart;
