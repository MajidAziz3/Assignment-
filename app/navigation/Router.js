import React from "react";
import {
    Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/home/Home'
import CartScreen from '../screens/cart/Cart'
import ActivityScreen from '../screens/activity/Activity'
import FavoritesScreen from '../screens/favorites/Favotites'
import ProfileScreen from '../screens/profile/Profile'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabsData = [
    {
      id: 'currency-tab',
      title: 'Currency',
      icon: require('../assets/home.png'),
      activeIcon: require('../assets/home1.png'),
    },
    {
      id: 'converter-tab',
      title: 'Converter',
      icon: require('../assets/home.png'),
      activeIcon:require('../assets/home.png'),
    },
    // {
    //   id: 'gold-tab',
    //   title: 'Gold',
    //   icon: Gold,
    //   activeIcon: GoldLg,
    // },
    // {
    //   id: 'settings-tab',
    //   title: 'Settings',
    //   icon: Settings,
    //   activeIcon: SettingsLG,
    // },
  ];
function TabContainer() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { position: 'absolute', borderTopLeftRadius: 10, borderTopRightRadius: 10 },
            }}
            shifting={false}
            tabBarOptions={{
                activeTintColor: '#102654',
                inactiveTintColor: "#fff",
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <Image source={require('../assets/home1.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                            :
                            <Image source={require('../assets/home.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Activity"
                component={ActivityScreen}
                options={{
                    tabBarLabel: "Activity",
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <Image source={require('../assets/activity1.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                            :
                            <Image source={require('../assets/activity.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: "Cart",
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require('../assets/cart1.png') : require('../assets/cart.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarLabel: "Favorites",
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require('../assets/fav1.png') : require('../assets/fav.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Accounts"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Accounts",
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require('../assets/profile1.png') : require('../assets/profile.png')} style={{ height: 22, width: 22, resizeMode: 'contain' }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"TabContainer"}>
                <Stack.Screen
                    name={"TabContainer"}
                    component={TabContainer}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Router;
