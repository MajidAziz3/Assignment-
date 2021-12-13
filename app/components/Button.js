import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FontFamily } from '../styles/Typography';
import { Colors } from '../styles/Colors';
const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
      height:40,
      backgroundColor:Colors.buttonColor,
      width:'90%',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      marginTop:30
  },
  text:
  {
      color:Colors.whiteColor,
      fontFamily:FontFamily.Helvetica_Neue_Regular,
      fontSize:14
  }
  
});

export default Button;
