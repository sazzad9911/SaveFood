import React from 'react';
import { View, Text, TouchableOpacity, Alert, Modal } from 'react-native';
import { Avatar } from 'react-native-paper'
import DropShadow from 'react-native-drop-shadow'
import model from '../Styles/model';
import SmallButton from '../button/SmallButton';
import firestore from '@react-native-firebase/firestore'
import app from '@react-native-firebase/app';


const VolunteerCart = (props) => {
    const [visible, setVisible] = React.useState(false)
    const [data, setData] = React.useState(null)
    const [Time, setTime] = React.useState(null)
    const [Date, setDate] = React.useState(null)
    const [modal, setModal] = React.useState(false)
    const [Read, setRead] = React.useState(props.data.Read)

    React.useEffect(() => {
        firestore().collection('UserInformation').where("Id", "==", props.uid).get().then(doc => {
            doc.forEach(user => {
                return setData(user.data())
            })
        })
    }, [])
    React.useEffect(() => {
        if (props.data) {
            const date = props.data.NewDate.toDate();
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            if (date.getHours() > 12) {
                const time = date.getHours() - 12 + ':' + date.getMinutes() + ' PM'
                setTime(time)
            } else {
                const time = date.getHours() + ':' + date.getMinutes() + ' AM'
                setTime(time)
            }

            setDate(date.getDay() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear())

        }
    })
    
    return (
        <DropShadow style={model.shadow}>
            <View style={model.cartView}>
                <TouchableOpacity onPress={() => setModal(!modal)}>
                    <Avatar.Image style={{
                        margin: 5,
                    }} size={60} source={{ uri: data ? data.Photo : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }} />
                </TouchableOpacity>
                <View style={{
                    justifyContent: 'center',
                    flex: 3,
                }}>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>{data ? data.Name : ''}</Text>
                    <Text>{props.data ? props.data.Message : ''}</Text>
                    {
                        Read ? (
                            <View></View>
                        ) : (
                            <View style={{ flexDirection: 'row' }}>
                                <SmallButton name='Accept' color='green' onPress={() => {
                                    setRead(true);
                                    props.accept(props.data)
                                }} />
                                <SmallButton name='Reject' color='red' onPress={()=>{
                                    setRead(true)
                                    props.reject(props.data)
                                }} />
                            </View>
                        )
                    }
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{Time}</Text>
                    <Text>{Date}</Text>
                </View>
            </View>
            <Modal visible={modal} animationType='fade'
                onRequestClose={() => setModal(!modal)}>
                <Profile data={data} />
            </Modal>
        </DropShadow>
    );
};

export default VolunteerCart;
const Profile = ({ data }) => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={[model.headerText, { marginTop: 50 }]}>User Profile</Text>
            <Avatar.Image style={{
                margin: 5,
            }} size={130} source={{ uri: data.Photo }} />
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                margin: 5,
                marginBottom: 15
            }}>{data.Name}</Text>
            <View>
                <Text>{data.Phone}</Text>
                <Text>{data.Email}</Text>
                <Text>{data.Address}</Text>
            </View>
        </View>
    )
}
