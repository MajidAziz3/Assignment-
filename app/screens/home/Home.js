import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
} from 'react-native';
import { Colors } from '../../styles/Colors'
import { FontFamily } from '../../styles/Typography';
import Input from '../../components/Input'
import Button from '../../components/Button'
import HomeCard from '../../components/HomeCard';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/user';
import { getUserCart } from '../../redux/actions/cart';
const Home = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passError, setpasError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [user, setUser] = useState('')
    const [qty,setQty]=useState(1)
    const login = () => {
        let validation = true
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            validation = false
            setEmailError('Enter a valid email')
        }
        if (password.length < 6) {
            validation = false
            setpasError('Enter 6 digits password')
        }
        if (name == '') {
            validation = false
            setNameError('Name is required')
        }
        if (phone.length < 10) {
            validation = false
            setPhoneError('Enter a Valid Phone number')
        }
        if (validation) {
            let obj = {
                email: email,
                phone: phone,
                name: name,
                password: password
            }
            props.getUser(obj)
            setUser(props.user.user)
            console.log(',,', props.user.user)
        }
    }
    const addQty=()=>{
        setQty(qty+1)
    }
    const removeQty=()=>{
        if(qty>1){
            setQty(qty-1)
        }
    }
    useEffect(() => {
        setUser(props.user.user)
    }, [props.user.user])
    return (
        <View style={styles.container1}>
            <ImageBackground source={require('../../assets/bg.png')}
                style={styles.container}
            >
                <ScrollView>
                    {user == '' ?
                        <View style={styles.main}>
                            <Text style={styles.text}>Login</Text>
                            <Input placeholder={'Email'} onChangeText={(text) => {
                                setEmailError('')
                                setEmail(text)
                            }}
                                value={email} />
                            <Text style={styles.errtxt}>{emailError}</Text>
                            <Input placeholder={'Name'} onChangeText={(text) => {
                                setNameError('')
                                setName(text)
                            }} />
                            <Text style={styles.errtxt}>{nameError}</Text>
                            <Input placeholder={'Password'} onChangeText={(text) => {
                                setpasError('')
                                setPassword(text)
                            }} secureTextEntry={true} />
                            <Text style={styles.errtxt}>{passError}</Text>
                            <View style={styles.phView}>
                                <View style={styles.left} >
                                    <Text style={styles.text1}>+971</Text>
                                </View>
                                <TextInput
                                    placeholder={'Mobile'}
                                    style={styles.textInput}
                                    placeholderTextColor={Colors.fontColor}
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => {
                                        setPhoneError('')
                                        setPhone(text)
                                    }}
                                />
                            </View>
                            <Text style={styles.errtxt}>{phoneError}</Text>
                            <Button text={'Submit'} onPress={() => {
                                login()
                            }} />
                        </View>
                        : null}
                    <HomeCard number={qty} add={addQty} remove={removeQty} />
                    <View style={{ height: 50 }}></View>
                </ScrollView>
            </ImageBackground>

        </View>
    );
};
const styles = StyleSheet.create({
    container1: {
        flex: 1
    },
    container: {
        height: '100%',
        width: "100%"
    },
    text:
    {
        fontFamily: FontFamily.Helvetica_Neue_Regular,
        color: Colors.blackColor,
        fontSize: 18
    },
    main:
    {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: Colors.borderColor,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 30
    },
    phView:
    {
        width: 280,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    left:
    {
        borderBottomWidth: 1,
        borderColor: Colors.borderColor,
        width: 45,
        paddingLeft: 10,
        paddingBottom: 13,
        marginTop: 15
    },
    text1:
    {
        color: Colors.fontColor,
        fontSize: 15,
    },
    errtxt:
    {
        color: Colors.fontColor,
        fontSize: 12,
        color: 'red',
        marginLeft: 20,
        marginTop: 5
    },
    textInput: {
        fontSize: 15,
        color: Colors.fontColor,
        width: 215,
        borderBottomWidth: 1,
        borderColor: Colors.borderColor,
        paddingHorizontal: 10,
        marginLeft: 20

    },
    bg:
    {
        width: 360,
        height: 360,
        alignSelf: "center",
        marginTop: 10,
        resizeMode: 'contain',
        marginBottom: 30
    }
});
const mapStateToProps = state => ({
    user: state.user,
    usercart:state.usercart

});
const mapDispatchToProps = {
    getUser,
    getUserCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);