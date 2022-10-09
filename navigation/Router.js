import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import AddCar from '../screens/AddCar';
import {NavigationContainer} from '@react-navigation/native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Ionicons from 'react-native-ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Center} from 'native-base';

const homeName = 'Home';
const addCarName = 'New Car';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home';
          } else if (rn === addCarName) {
            iconName = focused ? 'add-circle' : 'add-circle';
          } else if (rn === profileName) {
            iconName = focused ? 'person-circle' : 'person-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#1c313a',
        },
      })}>
      <Tab.Screen
        options={{headerTitleStyle: {color: '#ffffff'}}}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="New Car" component={AddCar} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
