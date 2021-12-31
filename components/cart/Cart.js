import React from 'react';
import { View, Text, Image, StyleSheet,useColorScheme,Dimensions } from 'react-native';
import DropShadow from "react-native-drop-shadow";
import {Colors} from 'react-native/Libraries/NewAppScreen';
const Cart = () => {
    const [Name, setName] = React.useState('Md. Jamal');
    const [Address, setAddress] = React.useState('Ashulia Model Town, Ashulia, Saver, Dhaka');
    const [date, setDate] = React.useState(new Date(Date.now()));
    const [Month, setMonth] = React.useState("");

    const isDarkMode = useColorScheme() === 'dark';
    const window=Dimensions.get('window');

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
            backgroundColor: backgroundStyle,
            width:window.width-20,
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
            width:window.width-20,
            height:window.width/2,
            borderRadius:10
        }
    
    })
    return (
        <DropShadow style={{
            shadowColor: backgroundStyle,
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
                    source={{ uri: 'https://picsum.photos/200' }}
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
                <Image style={styles.image} source={{ uri: 'https://picsum.photos/200'}}/>
            </View>
            <View style={styles.header}>
                <Image
                    style={styles.profile}
                    source={{ uri: 'https://picsum.photos/200' }}
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
            </View>
        </DropShadow>
    );
};

export default Cart;
