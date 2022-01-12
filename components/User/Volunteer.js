import React from 'react';
import { View, Text, ScrollView ,TouchableOpacity,Alert} from 'react-native';
import model from './../Styles/model';
import VolunteerCart from './../cart/VolunteerCart'
import Icon from 'react-native-vector-icons/AntDesign';
import DropShadow from 'react-native-drop-shadow'
import IconButton from './../button/IconButton'
import firestore from '@react-native-firebase/firestore'
import { launchImageLibrary } from 'react-native-image-picker';

const Volunteer = (props) => {
    const params = props.route.params;
    const [Admin, setAdmin] = React.useState(params.volunteer)
    const [Notifications, setNotifications] = React.useState(null)
    React.useEffect(()=> {
        firestore().collection('Notification').onSnapshot(data=>{
            let arr = [];
            data.forEach(docs => {
                arr.push(docs.data())
            })
            setNotifications(arr)
        })
    })

    const SaveImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: .5
        }, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                //const source = { uri: response.uri };
                setProfile(response.assets[0].uri)
                const ref = storage().ref('images/' + response.assets[0].fileName);
                    ref.putFile(response.assets[0].uri).then(() => {
                        ref.getDownloadURL().then(url => {
                         firestore().collection('UserInformation').doc(params.uid).update({
                                Photo: url
                            })

                        })
                    })
            }
        })
    }

    if (!Admin) {
        return (
            <View style={model.view}>
                <IconButton label="Request for Volunteer" icon='bike-fast' onPress={()=>{
                    firestore().collection('Notification').add({
                        Id:params.uid,
                        Message: params.name+' is requested for volunteering.',
                        Read: false,
                        NewDate: new Date(),
                        Type: 'volunteer'
                    })
                    Alert.alert('Success','Your request is now pending. Wait for response.')
                }}/>
            </View>
        );
    } else {
        return (
            <ScrollView>
                <AddPost onPress={()=>{

                }}/>
                {
                    Notifications && Notifications.length > 0 ?(
                        Notifications.map((doc,i)=>(
                            <VolunteerCart key={i} navigation={props.navigation} data={doc}/>
                        ))
                    ):(
                        <Text>Empty</Text>
                    )
                }
            </ScrollView>
        )
    }
};

export default Volunteer;
const AddPost = (props) => {
    return (
        <DropShadow onPress={()=> props.onPress()} style={model.shadow}>
            <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 5,
                margin: 5,
                flexDirection: 'row',
            }}>
                <Icon style={{
                    marginHorizontal: 10
                }} name="camera" size={25} color="#000" />
                <Text>Add Post</Text>
            </TouchableOpacity>
        </DropShadow>
    )
}