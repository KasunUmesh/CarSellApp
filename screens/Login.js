import { View, } from 'react-native'
import React from 'react'
import { NativeBaseProvider, VStack, Image, Center, Heading, Text } from "native-base";

export default function Login() {

  

  return (
    <NativeBaseProvider>
      
      <VStack  >
        
        
        
        <Center bg={"#263238"} h={"300px"}>
        
        <Image source={require("../assets/LoginCar.png")}  width={"100%"} height={"400px"} marginTop={"20"}/>

        <Text position={"absolute"} color={"#ffffff"} fontSize={"6xl"} bold top={"5"} left={"5"} >Car Sell</Text>

        </Center>

        <Center bg={"#2980b9"} h={"500px"} marginTop={"-4"} roundedTopRight={"70px"}  >
          <Text>Hello</Text>
        </Center>

        

      </VStack>
   
    </NativeBaseProvider>
  )
}
