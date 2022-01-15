import React from 'react';
import { Text, View, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper'
import IconButton from './button/IconButton';
import model from './Styles/model';
import auth from '@react-native-firebase/auth';
import AnimatedLoader from 'react-native-animated-loader';


const Forget = () => {
    const [Email, setEmail] = React.useState(null);
    const [loader,setLoader] = React.useState(false);

    return (
        <View style={model.view}>
            <Text style={model.headerText}>A link will sent to you via email</Text>
            <TextInput style={model.input} placeholder="Email................"
                value={Email} onChangeText={setEmail}
                mode="flat" />
            <IconButton style={{ marginVertical: 30 }} icon='skip-next' label='Send' onPress={() => {
                if (!Email) {
                    Alert.alert('Wrong', 'Wrong email address')
                    return
                }
                setLoader(true)
                auth().sendPasswordResetEmail(Email).then(() => {
                    Alert.alert('Successful', 'Check your email')
                    setLoader(false)
                }).catch(err => {
                    Alert.alert('Error', err.message)
                    setLoader(false)
                })
            }} />
            <AnimatedLoader
                visible={loader}
                overlayColor="rgba(255, 255, 255, 0.459)"
                source={require("./Files/88967-food-delivery-service.json")}
                animationStyle={model.loader}
                speed={1}
            >
                <Text style={{ color: "black" }}>Loading...</Text>
            </AnimatedLoader>
        </View>
    );
};

export default Forget;