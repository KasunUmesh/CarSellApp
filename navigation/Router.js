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

const homeName = 'Home';
const addCarName = 'Add';
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
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={AddCar} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>

    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name='AddCar' component={AddCar} />
    //   <Tab.Screen name="Profile" component={Profile} />
    // </Tab.Navigator>
  );
}
