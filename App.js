import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Register from './screens/Register'
import { NavigationContainer } from '@react-navigation/native'



export default function App() {
  return (
    <View>
     {/* <Login/> */}
     <NavigationContainer></NavigationContainer>
     <Register/>
     
    </View>
  )
}