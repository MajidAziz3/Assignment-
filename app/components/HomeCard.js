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
    TouchableOpacity,
    Share
} from 'react-native';
import { Colors } from '../styles/Colors'
import { FontFamily } from '../styles/Typography';
const HomeCard = (props) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Share your app'
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View style={styles.container1}>
            <ImageBackground source={require('../assets/bg1.png')} style={styles.bg}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={()=>{
                        onShare()
                    }}>
                        <Image source={require('../assets/share.png')} style={styles.image1} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/heart.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>GET A CHANCE TO WIN BANTLEY CONTINENTEL </Text>
                <View style={styles.card}>
                    <Image source={require('../assets/shirt.png')} style={styles.image2} />
                    <View>
                        <Text style={styles.text1}>BUY A BLUE COTTON SHIRT</Text>
                        <Text style={styles.text2}>AED 100</Text>

                        <View style={styles.bottom}>
                            <TouchableOpacity onPress={props.add}>
                                <Image source={require('../assets/plus.png')} style={styles.image} />
                            </TouchableOpacity>
                            <Text>{props.number}</Text>
                            <TouchableOpacity onPress={props.remove}>
                                <Image source={require('../assets/minus.png')} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container1: {
        flex: 1
    },

    bg:
    {
        width: 360,
        height: 360,
        alignSelf: "center",
        marginTop: 10,
        resizeMode: 'contain',
        marginBottom: 30
    },
    top:
    {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 40
    },
    image:
    {
        height: 20,
        width: 20,
        resizeMode: 'contain'

    },
    image1:
    {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        marginRight: 20

    },
    image2:
    {
        height: 97,
        width: 97,
        resizeMode: 'contain',
        marginRight: 20

    },
    text:
    {
        fontFamily: FontFamily.Helvetica_Neue_Regular,
        color: Colors.blackColor,
        fontSize: 14,
        width: '70%',
        alignSelf: 'flex-end',
        // marginRight:-20,
        textAlign: 'center',
        marginTop: 10,
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
        marginTop: 160,
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
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
export default HomeCard;
