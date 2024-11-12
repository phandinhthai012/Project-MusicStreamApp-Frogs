// SignIn.js
import { Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Keyboard,TouchableWithoutFeedback } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles/SignIn';

// Services Firebase
import AuthSignIn from '../../../services/AuthSignIn';

const SignIn = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [userNameBorderColor, setUserNameBorderColor] = useState('#7e7e7e');
    const [passwordBorderColor, setPasswordBorderColor] = useState('#7e7e7e');
    const [showError, setShowError] = useState(false);

    const handleSignIn = () => {
        let valid = true;
        if (userName.trim() === "") {
            setUserNameBorderColor('#fb4343');
            valid = false;
        } else {
            setUserNameBorderColor('#7e7e7e');
        }
        if (passWord.trim() === "") {
            setPasswordBorderColor('#fb4343');
            valid = false;
        } else {
            setPasswordBorderColor('#7e7e7e');
        }

        if (valid) {
            AuthSignIn(userName, passWord)
                .then((user) => {
                    console.log('User signed in:', user);
                    navigation.navigate('SignInStep1');
                    setShowError(false);
                })
                .catch((error) => {
                    showError(true);
                    alert("Username or Password is incorrect");
                });
        } else {
            setShowError(true);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.viewInputs}>
                        <TextInput
                            style={[styles.input, { borderColor: userNameBorderColor }]}
                            onChangeText={(text) => { setUserName(text)}}
                            placeholder="Username or Email address"
                            placeholderTextColor='#7e7e7e'
                        />
                        <TextInput
                            style={[styles.input, { borderColor: passwordBorderColor }]}
                            onChangeText={(text) => { setPassWord(text) }}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="#7e7e7e"
                        />
                        {showError && (
                            <View style={styles.viewerror}>
                                <Image style={styles.imgerror} source={require('../../../assets/images/Information-circle.png')} />
                                <Text style={[styles.txterror]}>Username or Password is incorrect</Text> 
                            </View>
                        )}

                        <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
                            <Text style={[styles.colortext2, styles.fonttext16]}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.colortext, styles.fonttext16]}>Forget password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerText}>
                        <Image source={require('../../../assets/images/Line24.png')} style={styles.footerImg} />
                        <Text style={[styles.colortext2, styles.fonttext14]}>Don't have an account?</Text>
                        <Image source={require('../../../assets/images/Line24.png')} style={styles.footerImg} />
                    </View>
                    <TouchableOpacity style={styles.btnfooter} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[styles.colortext, styles.fonttext16]}>Sign up for free</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default SignIn;
