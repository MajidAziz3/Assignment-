import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import { FontFamily } from '../styles/Typography';
import { Colors } from '../styles/Colors';
const Input = (props) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{props.text}</Text> */}
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        style={styles.textInput}
        placeholderTextColor={Colors.fontColor}
        keyboardType={props.keyboardType}
        ref={props.ref}
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 12,
  },
  text: {
    fontSize: 15,
    color: Colors.fontColor,
    marginLeft: 19
  },
  textInput: {
    fontSize: 15,
    color: Colors.fontColor,
    width:280,
    borderBottomWidth:1,
    borderColor:Colors.borderColor,
    paddingHorizontal:10,
    marginTop:5
 
  },
});

export default Input;
