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
    TouchableOpacity
} from 'react-native';
import { Colors } from '../styles/Colors'
import { FontFamily } from '../styles/Typography';
const Cart= (props) => {
    return (
        <View style={styles.container1}>

            <View style={styles.card}>
                <Image source={require('../assets/shirt.png')} style={styles.image2} />
                <View>
                    <Text style={styles.text1}>BUY A BLUE COTTON SHIRT</Text>
                    <Text style={styles.text2}>AED 100</Text>

                    <View style={styles.bottom}>
                        <TouchableOpacity>
                            <Image source={require('../assets/plus.png')} style={styles.image} />
                        </TouchableOpacity>
                        <Text>1</Text>
                        <TouchableOpacity>
                            <Image source={require('../assets/minus.png')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container1: {
        flex: 1
    },
    image2:
    {
        height: 80,
        width: 80,
        resizeMode: 'contain',
        marginRight: 20

    },
    image:
    {
        height: 20,
        width: 20,
        resizeMode: 'contain'

    },
    text1:
    {
        fontFamily: FontFamily.Helvetica_Neue_Regular,
        color: '#686869',
        fontSize: 11,

    },
    text2:
    {
        fontFamily: FontFamily.Helvetica_Neue_Regular,
        color: Colors.buttonColor,
        fontSize: 14,
        alignSelf: 'center',

    },
    card:
    {
        marginTop: 30,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 5,
        height: 130,
    },
    bottom:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '44%',
        alignSelf: 'center',
        marginTop: 15
    },

});
export default Cart;
