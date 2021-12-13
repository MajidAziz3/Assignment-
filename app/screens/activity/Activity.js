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
const Home = (props) => {
  return (
    <View
      style={styles.container}
    >
      <Text>No Activity Found</Text>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
});
export default Home;
