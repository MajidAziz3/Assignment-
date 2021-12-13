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
} from 'react-native';
import { Colors } from '../../styles/Colors'
import { FontFamily } from '../../styles/Typography';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/user';
const Home = (props) => {
  const [email, setEmail] = useState(props.user.user.email)
  const [name, setName] = useState(props.user.user.name)
  const [phone, setPhone] = useState(props.user.user.phone)
  const [user, setUser] = useState('')
  const update=()=>{
    let obj = {
      email: email==''?props.user.user.email:email,
      phone: phone==''?props.user.user.phone:phone,
      name: name==''?props.user.user.name:name,
  }
  props.getUser(obj)
  setUser(props.user.user)
  console.log(',,', props.user.user)
  }
  return (
    <View
      style={styles.container}
    >
      <View style={styles.main}>
        <Text style={styles.text}>Edit Profile</Text>
        <Input placeholder={'Email'} onChangeText={(text) => {
          setEmail(text)
        }}
          value={email} />
        <Input placeholder={'Name'} onChangeText={(text) => {
          setName(text)
        }}
          value={name} />
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
              setPhone(text)
            }}
            value={phone}
          />
        </View>
        <Button text={'Update'} onPress={()=>{update()}} />
      </View>
    </View>

  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1
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
    height: 350,
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
  textInput: {
    fontSize: 15,
    color: Colors.fontColor,
    width: 215,
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
    paddingHorizontal: 10,
    marginLeft: 20

  },
});
const mapStateToProps = state => ({
  user: state.user,

});
const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);