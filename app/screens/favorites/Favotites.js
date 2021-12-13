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
import FovoritesCard from '../../components/FavoritesCard';
const Favorite = (props) => {
  return (
    <View
      style={styles.container}
    >
      <FovoritesCard />
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Favorite;
