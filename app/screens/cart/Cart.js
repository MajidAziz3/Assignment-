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
import CartCard from '../../components/Cart';
const Cart = (props) => {
  return (
    <View
      style={styles.container}
    >
      <CartCard/>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Cart;
