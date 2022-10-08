import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Register from './screens/Register'
import Router from './navigation/Router'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
          <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
          <Stack.Screen options={{headerShown:false}} name="Router" component={Router} />
        </Stack.Navigator>
     </NavigationContainer>
    

  )
}